import mongoose from 'mongoose';
import config from '../config/index.js';
import * as dotenv from 'dotenv';

const MONGO_URI = config.app.MONGO_URI;
const MONGO_DB = config.app.MONGO_DB;

dotenv.config();

mongoose
  .connect(MONGO_URI, {
    dbName: MONGO_DB,
  })
  .catch((error) => console.error(error));
const db = mongoose.connection;

export default db;
