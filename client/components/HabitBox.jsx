/**
 * ************************************
 *
 * @module  HabitBox
 * @author
 * @date
 * @description presentation component that takes user input for new habit log
 *
 * ************************************
 */

import React from 'react';
import { logHabit } from '../actions/actions';

const HabitBox = (props) => {
  const datesCompleted = props.datesCompleted;
  let habitID = props.habitID;
  let habitName = props.habitName;
  let log = '  ';
  let date = props.date;
  let dateStr = date.toString();
  if (datesCompleted[dateStr] === true) {
    log = 'x';
  } else if (datesCompleted[dateStr] === false) {
    log = '  ';
  }

  return (
    <button
      className="habitButton"
      onClick={() => {
        props.logHabit({ index: {habitID}, date: {date} });
        console.log('logging', habitName, 'for', date);
      }}
    >
      {log}
    </button>
  );
};


// class HabitBox extends Component {
  
//   render() {
//     return (
//       <button className="habitButton">hi</button>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default HabitBox;
