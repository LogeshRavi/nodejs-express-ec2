/**
 * @createdBy <phpteam@vectone.com>
 * @createdOn 19th May 2022
 */

// loginSchema
export const loginSchema = {
	body: {
		type: 'object',
		required: ['mobileno', 'password', 'extension', 'device_type', 'browser', 'login_type'],
		properties: {
			mobileno: { type: 'string' },
			password: { type: 'string' },
			extension: { type: 'number' },
			device_type: { type: 'string' },
			browser: { type: 'string' },
			login_type: { type: 'string' },
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				status_code: { type: 'number' },
				err_code: { type: 'number' },
				affected_rows: { type: 'number' },
				message: { type: 'string' },
				finalresponse: {
					type: 'array',
					items: {
						properties: {
							didnumber_cityid: { type: 'number' },
							switch_board_no_display: { type: 'string' },
							company_id: { type: 'string' },
							company_name: { type: 'string' },
							customer_id: { type: 'string' },
							order_id: { type: 'string' },
							order_date: { type: 'string' },
							role_id: { type: 'string' },
							role_descript: { type: 'string' },
							domain_id: { type: 'string' },
							switch_board_no: { type: 'string' },
							order_comp_name: { type: 'string' },
							comp_last_login: { type: 'string' },
							extension: { type: 'string' },
							dnd_type: { type: 'string' },
							device_type: { type: 'string' },
							browser: { type: 'string' },
							login_type: { type: 'string' },
							multi_site_enable: { type: 'string' },
							main_siteid: { type: 'string' },
							completed_page: { type: 'string' },
							Hubspot_company_id: { type: 'string' },
							status: { type: 'number' },
							contactno: { type: 'string' },
							employee_id: { type: 'string' },
							errmsg2: { type: 'string' },
							Hubspot_contactid: { type: 'string' },
							is_free_trial: { type: 'number' },
							role_module_info: { type: 'string' },
							First_name: { type: 'string' },
							Last_name: { type: 'string' },
							domain_name: { type: 'string' },
							Is_FT_expired: { type: 'string' },
							is_payment_fail: { type: 'string' },
							user_didno: { type: 'string' },
							user_didno_display: { type: 'string' },
							SIP_ID: { type: 'string' },
							errcode: { type: 'number' },
							errmsg: { type: 'string' },
						}
					}
				}
			}
		}
	}
};
//testCreateJwtSchema
export const testCreateJwtSchema = {
	body: {
		type: 'object',
		required: ['mobileno', 'password', 'extension', 'device_type', 'browser', 'login_type'],
		properties: {
			mobileno: { type: 'string' },
			password: { type: 'string' },
			extension: { type: 'number' },
			device_type: { type: 'string' },
			browser: { type: 'string' },
			login_type: { type: 'string' },
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				status_code: { type: 'number' },
				message: { type: 'string' },
				token: { type: 'string' },
				refresh_token: { type: 'string' },
				results: {
					type: 'array',
					items: {
						properties: {
							didnumber_cityid: { type: 'number' },
							switch_board_no_display: { type: 'string' },
							company_id: { type: 'string' },
							company_name: { type: 'string' },
							customer_id: { type: 'string' },
							order_id: { type: 'string' },
							order_date: { type: 'string' },
							role_id: { type: 'string' },
							role_descript: { type: 'string' },
							domain_id: { type: 'string' },
							switch_board_no: { type: 'string' },
							order_comp_name: { type: 'string' },
							comp_last_login: { type: 'string' },
							extension: { type: 'string' },
							dnd_type: { type: 'string' },
							device_type: { type: 'string' },
							browser: { type: 'string' },
							login_type: { type: 'string' },
							multi_site_enable: { type: 'string' },
							main_siteid: { type: 'string' },
							completed_page: { type: 'string' },
							Hubspot_company_id: { type: 'string' },
							status: { type: 'number' },
							contactno: { type: 'string' },
							employee_id: { type: 'string' },
							errmsg2: { type: 'string' },
							Hubspot_contactid: { type: 'string' },
							is_free_trial: { type: 'number' },
							role_module_info: { type: 'string' },
							First_name: { type: 'string' },
							Last_name: { type: 'string' },
							domain_name: { type: 'string' },
							Is_FT_expired: { type: 'string' },
							is_payment_fail: { type: 'string' },
							user_didno: { type: 'string' },
							user_didno_display: { type: 'string' },
							SIP_ID: { type: 'string' },
							errcode: { type: 'number' },
							errmsg: { type: 'string' },
						}
					}
				}
			}
		}
	}
};
//forgotPasswordSchema
export const forgotPasswordSchema = {
	body: {
		type: 'object',
		properties: {
			email: { type: 'string' },
			type: { type: 'number' },
			called_by: { type: 'string' },
			new_pwd: { type: 'string' },
			log_id: { type: 'string' },
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				status_code: { type: 'number' },
				err_code: { type: 'number' },
				affected_rows: { type: 'number' },
				message: { type: 'string' },
				finalresponse: {
					type: 'array',
					items: {
						properties: {
							errcode: { type: 'number' },
							errmsg: { type: 'string' },
							first_name: { type: 'string' },
							log_id: { type: 'number' },
							ResetURL: { type: 'string' },
						}
					}
				}
			}
		}
	}
};