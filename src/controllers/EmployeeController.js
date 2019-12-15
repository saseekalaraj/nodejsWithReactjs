const controllers = {};
// import model
var sequelize = require("../model/database");
var Employee = require("../model/Employee");
var Role = require("../model/Role");

controllers.testdata = (req, res) => {
  const response = sequelize
    .sync()
    .then(function() {
      //temp data
      const data = Employee.findAll();
      return data;
    })
    .catch(err => {
      return err;
    });
  res.json({
    success: true,
    data: response
  });  
};
controllers.test = (req, res) => {
  const data = {
    name: "sasee",
    age: 24,
    city: "jaffna"
  };
  console.log("Execute from controllers Employee");

  res.json(data);
};
module.exports = controllers;
