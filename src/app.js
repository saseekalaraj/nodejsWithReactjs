const express = require("express");
const app = express();

//set port
app.set("port", process.env.POST || 3001);

//middeleware
app.use(express.json());

//importing route
const employeeRouter = require("./routes/EmployeeRoutes");
app.use("/employee", employeeRouter);

app.use("/test", (req, res) => {
  res.send("Test route");
});
app.use("/", (req, res) => {
  res.send("hello world from nodejs");
});
app.listen(app.get("port"), () => {
  console.log("Server Starting Successfully");
});
