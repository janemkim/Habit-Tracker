/**
 * ************************************
 *
 * @module  DateRow
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

import React, { Component } from 'react';
// import HabitBox from '../components/HabitBox.jsx';

class DateRow extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const arr = [];
    for (let i = 29; i >= 0; i--) {
      const today = new Date();
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const newDate = (date.getMonth()+1)+'/'+date.getDate();
      arr.push(
        <div className="date" key={newDate}> {newDate} </div>
      )
    }
    return (
      <div className="dateRow">
        <div className="dateName">
          Dates:
        </div>
        {arr}
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default DateRow;
