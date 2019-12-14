const Sequelize = require("sequelize");
var sequelize = require("./database");

var nametable = "employeedao";
var Role = require("./Role");

var Employee = sequelize.define(nametable, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  //forienKey
  roleId: {
    type: Sequelize.INTEGER,
    //reference roleTable
    reference: {
      model: Role,
      key: "id"
    }
  }
});
Employee.belongsTo(Role);

module.exports = Employee;
