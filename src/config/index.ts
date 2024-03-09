import * as dotenv from 'dotenv';

//Make sure that NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


if (process.env.NODE_ENV !== 'prod') {
    const configFile = './.env';
    dotenv.config({path: configFile});
} else {
    dotenv.config();
}

const config = {
    PORT: process.env.PORT as string || '3000',
    NODE_ENV: process.env.NODE_ENV as string || 'dev',
    APP_SECRET: process.env.APP_SECRET as string
}

export default config;