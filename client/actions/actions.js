/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const addHabit = (habitName) => ({
  type: types.ADD_HABIT,
  payload: habitName,
});

export const logHabit = (habitlog) => ({
  type: types.LOG_HABIT,
  payload: habitlog,
});

// add more action creators
// export const addMarket = (location) => ({
//   type: types.ADD_MARKET,
//   payload: location,
// });

// export const deleteCard = (marketId) => ({
//   type: types.DELETE_CARD,
//   payload: marketId,
// });
