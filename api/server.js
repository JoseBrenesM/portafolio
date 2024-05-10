// server.js
require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { connectToDatabase } = require("../src/repositories/coneRepo");

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    console.log('Connected to MongoDB');
    next();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    res.status(500).send("Error connecting to database");
  }
});

const contactRoute = require("../src/routes/contactRoutes");
app.use('/api', contactRoute);

app.get("/api/data", (req, res) => res.send("Express on Vercel"));

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});

module.exports = app;
