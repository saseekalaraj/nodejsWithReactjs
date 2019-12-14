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
      Role.create({
        role: "Admin"
      });
      Employee.create({
        name: "sasee",
        email: "sasee9488@gmail.com",
        address: "jaffna",
        phone: "0776445624",
        roleId: 1
      });
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
  console.log(response);
  
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
