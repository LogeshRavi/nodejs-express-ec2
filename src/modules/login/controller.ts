/**
 * @createdBy <phpteam@vectone.com>
 * @createdOn 19th May 2022
 */


import {
	loginModel,

} from './model';

/**
 * 
 * @param req 
 * @param res 
 */
export async function loginController(req: any, res: any) {
	try {
		console.log("rrrrrr")
		res.send("ffffffffff")
		//const body: any = req.body;
		// const results: any = await loginModel(body);
		// console.log(results);
		// if (results.message !== undefined) {
		// 	res.send({ status_code: 404, err_code: -1, message: results.message });
		// }
		//res.send({ status_code: 200, err_code: 1, affected_rows: results.length, message: 'success', finalresponse: results });
	} catch (err) {
		res.log.error(err);
		res.send({ status_code: 500, err_code: -1, affected_rows: 0, message: 'internal server error' });
	}
}

