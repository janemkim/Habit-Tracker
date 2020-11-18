/**
 * ************************************
 *
 * @module  AddHabit
 * @author
 * @date
 * @description presentation component that takes user input for new habit creation
 *
 * ************************************
 */

import React from 'react';
import { addHabit } from '../actions/actions';

const AddHabit = (props) => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    {/* <h4>Add New Habit</h4> */}
    {/* <label htmlFor="habitAdder">Add Habit: </label> */}
    <input name="habitAdder" id="habitAddInput"></input>
    <button
      onClick={() => {
        props.addHabit(document.getElementById('habitAddInput').value);
        console.log('adding', document.getElementById('habitAddInput').value);
      }}
    >
      Add Habit
    </button>
  </div>
);

export default AddHabit;
