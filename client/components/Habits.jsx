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

import React, { Component } from 'react';
import HabitRow from '../components/HabitRow.jsx';

class Habits extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="habitEnter">
        <div className="habitBoxes">
          <h3 id="header">Drink Water</h3>
          {/* Start adding components here... */}
          <HabitRow
            xorno={this.props.xorno}
          />
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default Habits;
