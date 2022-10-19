import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    NumberOfEvents: 32,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      NumberOfEvents: value,
    });
  };

  render() {
    return (
      <div>
        <div className='number-of-events'>
          <label>
            Number of Events:
            <input
              type='number'
              className='number-of-events-input'
              value={this.state.NumberOfEvents}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;