/**
 * @createdBy <phpteam@vectone.com>
 * @createdOn 19th May 2022
 */

import {
	mysqlWorktualDBConnection,
} from '../../../config/db';
import {
	forgotPasswordInterface,
	loginInterface

} from './interface';

/**
 * 
 * @param data 
 * @returns 
 * SP: UR_Myacc_Web_login
 */
export const loginModel = (data: loginInterface) => {
	return new Promise(async (resolve, reject) => {
		try {

			
			// mysqlWorktualDBConnection.query("CALL UR_Myacc_Web_login (?,?,?,?,?,?)", [data.mobileno,
			// data.password, data.extension, data.device_type, data.browser, data.login_type], (err, result) => {
			// 	if (err) {
			// 		console.log("err:", err);
			// 	} else {
			// 		console.log("results:", result[0]);
			// 		resolve(result[0]);
			// 	}
			// });

		} catch (err) {
			console.log(err);
			reject(err);
		}
	});
};

