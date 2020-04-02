import React, { Component } from 'react';
import './App.css';
import Dailies from '../../Containers/DailyInfoContainer/DailyInfoContainer.js'
import DailyInputForm from '../DailyInputForm/DailyInputForm'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main className='App'>
        <h2>Where it all goes</h2>
        <DailyInputForm />
        <Dailies />
      </main>
    )
  }
}

export default App;
