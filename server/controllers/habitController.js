const Habit = require('../models/habitModel.js');

const habitController = {};

habitController.saveHabit = function(req,res,next) {
  console.log(getState());

  Habit.create({
    personID: 'personid',
    totalHabits: 2,
    habitList: [
      { 
        habitID: 10001,
        habitName: 'eat',
        daysInARow: 0,
        daysCompleted: {
          '11/17': true
        },
      },
      { 
        habitID: 10002,
        habitName: 'drink',
        daysInARow: 0,
        daysCompleted: {
          '11/16': true,
          '11/18': true
        },
      }
    ],
    lastHabitID: 1002,
    habitNames: {'': true, 'eat': true, 'drink': true},
  })

  return next();
};

module.exports = habitController;