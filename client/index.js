import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello World from React boilerplate</h1>;
//   }
// }

render(
  <Provider store= {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
