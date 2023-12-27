const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors');

const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // SQLite database file
});

// Define a model for storing names
const Name = sequelize.define('Name', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync();



const myLogger = function(req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next(); // THIS IS IMPORTANT!
}

app.use(myLogger)
app.use(cors()); // Enable CORS for all routes

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/test", function (req, res) {
  res.send("Hello test!");
});

// Endpoint to handle /message with a query parameter 'name'
app.get("/message", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send('Name parameter is missing');
  }

  try {
    // Save the name to the database
    await Name.create({ name });
    res.send(`Name '${name}' saved successfully`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving the name');
  }
});

// Endpoint to fetch all content from names.txt
app.get("/getallmessages", async (req, res) => {
  try {
    // Fetch all names from the database
    const names = await Name.findAll();
    const messages = names.map(name => name.name);
    res.json({ messages });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching messages');
  }
});

// Endpoint to clear the content of 'names.txt'
app.get("/clearmessage", async (req, res) => {
  try {
    // Delete all names from the database
    await Name.destroy({ truncate: true });
    res.send('File content cleared successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error clearing messages');
  }
});



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
