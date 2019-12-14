var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "node", //database name
  "root", //username
  "1234", //password
  {
    host: "localhost",
    dialect: "mysql"
  }
);

module.exports = sequelize;
