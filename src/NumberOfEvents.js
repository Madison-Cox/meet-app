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
    this.props.updateEvents(value);
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