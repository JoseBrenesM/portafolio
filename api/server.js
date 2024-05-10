// server.js
require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connectToDatabase } = require("../src/repositories/coneRepo");

connectToDatabase()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(204);
  });


const contactRoute = require("../src/routes/contactRoutes");
app.use('/api', contactRoute);


app.get("/api/data", (req, res) => res.send("Express on Vercel"));

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`);
});

module.exports = app;