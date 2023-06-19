/**
 * @createdBy <team@vectone.com>
 * @createdOn 17th Dec 2020
 */
import { config } from 'dotenv';
import sql from 'mssql';
import {
	mssqlTokenPoolConnection, mysqlWorktualTokenDBConnection,
} from '../config/db';
import * as app from '../config/app';
import * as jwt from 'jsonwebtoken';
import { FastifyReply, FastifyRequest } from 'fastify';
import { allowedNodeEnvironmentFlags } from 'process';

/**
  * Allow authorized user to access resource, without narrowing scope to role/account
  *
  * @export
  * @param {FastifyRequest<{}>} req
  * @param {FastifyReply<{}>} res
  * @param {(err?: Error) => void} done
  * @returns
  */
export function validateSession(req: FastifyRequest<{}>, res: FastifyReply, done: (err?: Error) => void) {
	try {
		console.log("test")
		let decoded: any = {};
		if (!req.headers || !req.headers.authorization) {
			return res.status(401).send({ statusCode: 401, error: 'unauthorized', message: 'Missing authentication token' });
		} else {
			decoded = jwt.verify(
				req.headers.authorization,
				app.configs.jwtsecret
			);
			if (!decoded.extension && !decoded.mobileno) {
				return res.status(403).send({ statusCode: 403, error: 'forbidden', message: 'Invalid credentials in authentication token' });
			} else {
				req['authorization'] = {
					extension: decoded.extension,
					mobileno: decoded.mobileno
				};
				return done();
			}
		}
	} catch (err) {
		console.log(err);
		return res.status(403).send({ statusCode: 403, error: 'forbidden', message: 'Invalid credentials in authentication token' });
	}
}

export function validateAccessToken(req: FastifyRequest<{}>, res: FastifyReply, done: (err?: Error) => void) {
	try {
		console.log("test1")
		if (!req.headers['x-access-token'] || req.headers['x-access-token'] == '') {
			return res.status(401).send({ statusCode: 401, error: 'missing_accesstoken', message: 'Missing Access Token' });
		} else {

			if (process.env.DB !== "MYSQL") {
				const Proj_Name = process.env.PROJECT_NAME;
				//console.log('access token --- --- ',req.headers['access_token']);
				mssqlTokenPoolConnection.connect().then(() => {
					const request = new sql.Request(mssqlTokenPoolConnection);
					request.input('Proj_Name', sql.Text, Proj_Name);
					request.input('Token_ID', sql.Text, req.headers['x-access-token']);
					request.execute('Usp_API_Return_Token_Status', (err: any, result: any) => {
						if (err) {
							console.log('Get Token Nodejs DB Connection - ', err);
							return false;
						}
						console.log('token status result -- --', result.recordset[0].Status);
						if (result.recordset[0].Status == 'Invalid Token') {
							return res.status(401).send({ statusCode: 401, error: 'invalid_accesstoken', message: 'Invalid Access Token in Authentication API' });
						} else if (result.recordset[0].Status !== 'OK') {
							return res.status(401).send({ statusCode: 401, error: 'expired_accesstoken', message: 'Access Token Expired in Authentication API' });
						} else {
							return done();
							//res.send(data);
						}
					});
				})
			} else {
				const Proj_Name = process.env.PROJECT_NAME;
				console.log("data",Proj_Name,req.headers['x-access-token'])
				//console.log('access token --- --- ',req.headers['access_token']);
				mysqlWorktualTokenDBConnection.query("CALL Usp_API_Return_Token_Status (?,?)", [Proj_Name,req.headers['x-access-token']], (err, result) => {
					if(err) {
						console.log("err",err)
						return err
					}
					console.log("result",result)
					if (result[0][0].Status == 'Invalid Token') {
						console.log("result[0][0].Status",result[0][0].Status)
						return res.status(401).send({ statusCode: 401, error: 'invalid_accesstoken', message: 'Invalid Access Token in Authentication API' });
					} else if (result[0][0].Status !== 'OK') {
						console.log("result[0][0].Status",result[0][0].Status)
						return res.status(401).send({ statusCode: 401, error: 'expired_accesstoken', message: 'Access Token Expired in Authentication API' });
					} else {
						console.log("result[0][0].Status",result[0][0].Status)
						return done();
					}
				});
			}
		}
		} catch (err) {
			console.log(err);
			return res.status(403).send({ statusCode: 403, error: 'forbidden', message: 'Invalid Access Token in Authentication API' });
		}
	}