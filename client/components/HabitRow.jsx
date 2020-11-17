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
    for (let i = 0; i < 30; i++) {
      arr.push(
        <HabitBox 
          xorno={this.props.xorno}
        />)
    }
    return (
      <div className="habitRow">
        Habit Name: 
        {arr}
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default HabitRow;
