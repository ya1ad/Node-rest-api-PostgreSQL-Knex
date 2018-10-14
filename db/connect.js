const enviroment = process.env.NODE_ENV || "development";
const config = require("../knexfile");
const enviromentConfig = config[enviroment];
const knex = require("knex");
const connect_db = knex(enviromentConfig);
module.exports = knex(enviromentConfig);
