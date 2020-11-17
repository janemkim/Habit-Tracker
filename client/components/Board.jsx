/**
 * ************************************
 *
 * @module  Board
 * @author
 * @date
 * @description stateful component that renders Habits
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';
// // import from child components...
import Habits from '../components/Habits.jsx';
import AddHabit from '../components/AddHabit.jsx';

// this is the state in habitReducers!
// const initialState = {
//   totalHabits: 0,
//   // totalDays: 0,
//   habitList: [],
//   lastHabitID: 10000,
//   newHabit: '',
//   habitNames: { '': true },
// };

const mapStateToProps = (state) => ({
  // add pertinent state here
  totalHabits: state.habits.totalHabits,
});

const mapDispatchToProps = (dispatch) => ({
  // increaseTotal: () => {dispatch({type: , payload:})},
  addHabit: () => {
    dispatch(actions.addHabit());
  },
});

class Board extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="outerBox">
          <h2 id="header">Habits</h2>
          {/* Start adding components here... */}
          <Habits 
            totalHabits={this.props.totalHabits}
            xorno={this.props.xorno}
          />
          <AddHabit 
            addHabit={this.props.addHabit}
          />
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default connect(mapStateToProps, mapDispatchToProps)(Board);