/**
 * ************************************
 *
 * @module  Habits
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

// import React, { Component } from 'react';
// import HabitRow from '../components/HabitRow.jsx';

// class Habits extends Component {
  
//   render() {
//     return (
//       <div className="habitEnter">
//         <div className="habitBoxes">
//           <p>
//             # of Habits Being Tracked: {this.props.totalHabits}
//           </p>
//           {/* <h3 id="header">Drink Water</h3> */}
//           {/* Start adding components here... */}
//           <HabitRow
//             xorno={this.props.xorno}
//           />
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react';
import HabitRow from '../components/HabitRow.jsx';
import DateRow from '../components/DateRow.jsx';

//Things inside a newHabit inside a habitList -> from habitsReducers
// const newHabit = {
//   // what goes in here?
//   habitID: lastHabitID,
//   habitName: action.payload,
//   daysInARow: 0,
//   datesCompleted: {},
//   //want individual buttons here somehow
// };

const Habits = (props) => {
  const habits = [];

  for (let i = 0; i < props.habitList.length; i+=1) {
    habits.push(
      <HabitRow
        logHabit={props.logHabit}
        habitID={props.habitList[i].habitID}
        habitName={props.habitList[i].habitName}
        daysInARow={props.habitList[i].daysInARow}
        datesCompleted={props.habitList[i].datesCompleted}
        // date={i}
        key={i}
      />
    )
  }

  return (
    <div className="habitEnter">
      <div className="habitBoxes">
        <p>
          # of Habits Being Tracked: {props.totalHabits}
        </p>
        <DateRow/>
        {habits}
      </div>
    </div>
  );
}

export default Habits;
