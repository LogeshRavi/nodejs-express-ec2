import { config } from 'dotenv';


export interface IConfig {
    mysqlWorktualCRMDB: {
        user: string;
        password: string;
        host: string;
        database: string;
    };
}

const production = process.env.NODE_ENV === 'production';


export const configs: IConfig = {
    mysqlWorktualCRMDB: (() => {
        if (production) {
            return {
                host: '10.150.0.35',
                user: 'JAVAteam',
                password: 'JAVAteam@123',
                database: 'payment',
            };
        }
        return {
            host: '10.150.0.35',
            user: 'JAVAteam',
            password: 'JAVAteam@123',
            database: 'payment',
        };
    })(),
}