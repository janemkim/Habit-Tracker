/**
 * ************************************
 *
 * @module  App.jsx
 * @author 
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import Board from './components/Board.jsx';
import style from './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xorno: "-",
      // totalHabits: 0,
      // // totalDays: 0,
      // habitList: [],
      // lastHabitID: 10000,
      // newHabit: '',
      // habitNames: { '': true },
    }
  }

  render() {
    return (
      <div>
        <Board 
          xorno={this.state.xorno}
        />
      </div>
    );
  }
}

export default App;
