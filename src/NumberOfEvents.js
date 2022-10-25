import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };


  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  };


  render() {
    const { handleInputChange, numberOfEvents } = this.props;
    return (
      <div>
        <div className='number-of-events'>
          <label>
            Number of Events:
            <input
              type='number'
              className='number-of-events-input'
              value={numberOfEvents}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;