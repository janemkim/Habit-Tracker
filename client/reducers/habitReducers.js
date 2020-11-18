/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import { bindActionCreators } from 'redux';
import * as types from '../constants/actionTypes';

const initialState = {
  totalHabits: 0,
  // totalDays: 0,
  habitList: [],
  lastHabitID: 10000,
  newHabit: '',
  habitNames: { '': true },
};

const habitsReducers = (state = initialState, action) => {
  let habitList = [];
  let { totalHabits } = state;
  let { lastHabitID } = state;
  const { habitNames } = state;

  // const index = action.payload - 10000 - 1;

  switch (action.type) {
    case types.ADD_HABIT:
      if (!habitNames.hasOwnProperty(action.payload)) {
        // increment lastHabitId and totalHabits counters
        lastHabitID += 1;
        totalHabits += 1;
        // Add habit name to the habitNames object
        habitNames[action.payload] = true;

        // create the newHabit object from provided data
        const newHabit = {
          // what goes in here?
          habitID: lastHabitID,
          habitName: action.payload,
          daysInARow: 0,
          datesCompleted: {},
          //want individual buttons here somehow
        };

        // push the new habit onto a copy of the habit list
        habitList = state.habitList.slice();
        habitList.push(newHabit);

        // return updated state

        return {
          ...state,
          habitList,
          lastHabitID,
          totalHabits,
          newHabit: action.payload,
        };
      } else {
        return state;
      }

    case types.LOG_HABIT:
      const habitID = action.payload.index.habitID;
      const date = action.payload.date.date;
      const dateStr = date.toString();
      habitList = state.habitList.slice();
      // console.log(habitList);
      if (!habitList[habitID - 10000 - 1].datesCompleted[dateStr]) {
        habitList[habitID - 10000 - 1].datesCompleted[dateStr] = true;
        return {
          ...state,
          habitList,
        };
      } else if (habitList[habitID - 10000 - 1].datesCompleted[dateStr] === true) {
        habitList[habitID - 10000 - 1].datesCompleted[dateStr] = false;
        return {
          ...state,
          habitList,
        };
      } else {
        return state;
      }

    // props.logHabit({ index: {habitID}, date: {date} });

    // case types.SET_NEW_LOCATION:
    //   break;

    // case types.ADD_CARD:
    //   marketList = state.marketList.slice();
    //   marketList[index].cards += 1;
    //   totalCards += 1;

    //   for (let market of marketList) {
    //     market.percentOfTotal =
    //       Math.round(10000 * (market.cards / totalCards)) / 100;
    //   }

    //   return {
    //     ...state,
    //     marketList,
    //     totalCards,
    //   };

    // case types.DELETE_CARD:
    //   marketList = state.marketList.slice();
    //   if (marketList[index].cards > 0) {
    //     marketList[index].cards -= 1;
    //     totalCards -= 1;
    //     for (let market of marketList) {
    //       market.percentOfTotal =
    //         Math.round(10000 * (market.cards / totalCards)) / 100;
    //     }
    //   }

    //   return {
    //     ...state,
    //     marketList,
    //     totalCards,
    //   };

    default:
      return state;
  }
};

export default habitsReducers;
