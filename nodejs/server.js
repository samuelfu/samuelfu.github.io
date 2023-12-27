const express = require("express");
const fs = require('fs');
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

// Endpoint to handle /message with a query parameter 'name'
app.get("/message", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send('Name parameter is missing');
  }

  // Save the name to a file named 'names.txt'
  fs.appendFile('names.txt', `${name}\n`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving the name');
    }
    res.send(`Name '${name}' saved successfully`);
  });
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
