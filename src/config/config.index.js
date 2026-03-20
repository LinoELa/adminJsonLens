require("dotenv").config();
const { Pool } = require("pg");

const PORT = Number(process.env.PORT) || 5700;
const DB_HOST = process.env.DB_HOST || "";
const DB_PORT = Number(process.env.DB_PORT) || 0;
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "";

const hasDbConfig = Boolean(DB_HOST && DB_PORT && DB_USER && DB_PASSWORD && DB_NAME);

const db = hasDbConfig
  ? new Pool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    })
  : null;

module.exports = {
  PORT,
  db,
};
