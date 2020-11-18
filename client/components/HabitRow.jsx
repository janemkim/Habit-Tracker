/**
 * ************************************
 *
 * @module  HabitRow
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

import React, { Component } from 'react';
import HabitBox from '../components/HabitBox.jsx';

class HabitRow extends Component {
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
        <HabitBox 
          key={newDate}
          className="habitBox"
          datesCompleted={this.props.datesCompleted}
        />)
    }
    return (
      <div className="habitRow">
        <span className="habitName">
          {this.props.habitName}: 
        </span>
        {arr}
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default HabitRow;
