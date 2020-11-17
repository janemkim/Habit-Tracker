import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

class Welcome extends React.Component {
  render() {
    return <h1>Hello World from React boilerplate</h1>;
  }
}

render(
  <Welcome />,
  document.getElementById('root')
);
