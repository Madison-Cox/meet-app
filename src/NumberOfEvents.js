import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    ErrorText: '',
  };


  handleInputChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Enter a number from 1 to 32',
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: '',
      });
    }
    this.props.updateEvents(undefined, value);
  };


  render() {
    return (
      <div>
        <div className='number-of-events'>
          <ErrorAlert text={this.state.InfoText} />
          <label>
            Number of Events:
            <input
              type='number'
              className='number-of-events-input'
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