import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  app: {
    ENV: process.env.NODE_ENV || 'dev',
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB: process.env.MONGO_DB,
  },
};

export default config;
