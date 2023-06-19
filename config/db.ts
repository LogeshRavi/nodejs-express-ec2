
import mysql from 'mysql';
import { configs } from './app';
// import { Emitter } from '@socket.io/redis-emitter';

/**
 * Mssql pool connection
*/

export const mysqlWorktualDBConnection = mysql.createPool(configs.mysqlWorktualCRMDB);






