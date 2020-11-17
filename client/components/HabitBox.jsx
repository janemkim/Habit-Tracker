/**
 * ************************************
 *
 * @module  HabitBox
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

import React, { Component } from 'react';
// import { addHabit } from '../actions/actions';

// const AddHabit = (props) => (
//   // how do we create the circuit between the store and an input field?
//   // how do we update the store from a presentation component?
//   <div>
//     {/* <h4>Add New Habit</h4> */}
//     {/* <label htmlFor="habitAdder">Add Habit: </label> */}
//     <input name="habitAdder" id="habitAddInput"></input>
//     <button
//       onClick={() => {
//         props.addHabit(document.getElementById('habitAddInput').value);
//       }}
//     >
//       Add Habit
//     </button>
//   </div>
// );

class HabitBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {xorno} = this.props;
    return (
      <button id="button">{xorno}</button>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default HabitBox;
