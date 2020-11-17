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
      if (!habitNames.hasOwnProperty(action.payload.trim())) {
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
          //want individual buttons here somehow
        };

        // push the new market onto a copy of the market list
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
