import React, { Component } from 'react';

class DailyInputForm extends Component{ 
  constructor() {
    super();
    this.state = {
      date: '',
      numberOfTrips: '',
      moneyMade: '',
      hoursDriven: '',
      moneySpent: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }


  render() {
    return(
      <form>
        <input 
          type = 'date'
          placeholder = 'Date'
          name = 'date'
          value = {this.state.date}
          
        />

        <input 
          type = 'number'
          placeholder = 'Hours Driven'
          name = 'hours-driven'
          value = {this.state.hoursDriven}
          onChange = {e => this.handleChange(e)}
        />

        <input 
          type = 'number'
          placeholder = '# of Trips'
          name = 'number-of-trips'
          value = {this.state.numberOfTrips}
          onChange={e => this.handleChange(e)}
        />

        <input 
          type = 'number'
          placeholder = 'Money Made'
          name = 'money-made'
          value = {this.state.moneyMade}
          onChange={e => this.handleChange(e)}
        />

        <input 
          type = 'number'
          placeholder = 'Money Spent'
          name = 'money-spent'
          value = {this.state.moneySpent}
          onChange={e => this.handleChange(e)}
        />
      </form>
    )
  }
};

export default DailyInputForm;