const express = require("express");
const app = express();
const port = 3000;

const myLogger = function(req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next(); // THIS IS IMPORTANT!
}

app.use(myLogger)

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/test", function (req, res) {
  res.send("Hello test!");
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
