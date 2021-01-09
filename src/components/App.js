import logo from '../logo.svg';
import '../App.css';
import Navigation from './Navigation';
import CalenderBoard from './CalendarBoard';
import React from 'react';

function App() {
  return (
      <React.Fragment>
        <Navigation></Navigation>
        <CalenderBoard></CalenderBoard>
      </React.Fragment>
  );
}

export default App;
