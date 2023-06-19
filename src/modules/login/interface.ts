/**
 * @createdBy <phpteam@vectone.com>
 * @createdOn 19th May 2022
 */

/**
 * UR_Myacc_Web_login
 */
export interface loginInterface {
    mobileno: string,
    password: string,
    extension: number,
    device_type: string,
    browser: string,
    login_type: string,
}
/**
 * ur_app_login_forgot_pwd 
 */
export interface forgotPasswordInterface {
    email: string,
    type: number,
    called_by: string,
    new_pwd: string,
    log_id: number,
}