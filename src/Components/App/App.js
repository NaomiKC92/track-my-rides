import React, { Component } from 'react';
import './App.css';
import Dailies from '../Dailies/Dailies'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main className='App'>
        <h2>Where it all goes</h2>
        <Dailies />
      </main>
    )
  }
}

export default App;
