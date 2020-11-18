const mongoose = require('mongoose');

const { Schema } = mongoose;

const habitSchema = new Schema({
  personID: {type: String, required: true, unique: true},
  totalHabits: {type: Number, required: true},
  habitList: [
    { 
      habitID: Number,
      habitName: String,
      daysInARow: Number,
      daysCompleted: {},
    }
  ],
  lastHabitID: Number,
  habitNames: {},
})

module.exports = mongoose.model('Habit', habitSchema);