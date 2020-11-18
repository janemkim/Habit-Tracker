const express = require("express");
const app = express();
const path = require("path");
const habitController = require('./controllers/habitController');

const mongoose = require('mongoose');
const uri = "mongodb+srv://janemkim:forHabitTrackerApp@habittracker.sll6o.mongodb.net/habittracker?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Database!');
});


if (process.env.NODE_ENV === "production") {
  // statically serve everything in the build folder on the route '/build'
  app.use("/build", express.static(path.join(__dirname, "../build")));
  // serve index.html on the route '/'
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
}

app.get("/", habitController.saveHabit, (req, res) => {
  res.sendStatus(200);
})

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

module.exports = db;    
