import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  };


  handleInputChange = (event) => {
    let value = event.target.value;
    if (value >= 33 || value <= 0) {
      value = 32;
      this.setState({
        numberOfEvents: 32,
        errorText: 'Enter a number from 1 to 32',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
    }
    this.props.updateEvents(undefined, value);
  };


  render() {
    return (
      <div>
        <div className='number-of-events'>
          <ErrorAlert text={this.state.errorText} />
          <label>
            Number of Events:
            <input
              type='number'
              className='number-of-events-input'
              min='1'
              value={this.state.numberOfEvents}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;