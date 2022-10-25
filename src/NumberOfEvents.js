import React, { Component } from 'react';
import { getEvents } from './api';
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  updateEvents = (location, eventCount) => {
    const { numberOfEvents } = this.state;
    if (location === undefined) location = this.state.selectedLocation;
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      eventCount = eventCount === undefined ? numberOfEvents : eventCount;
      this.setState({
        events: locationEvents.slice(0, eventCount),
        selectedLocation: location,
        numberOfEvents: eventCount,
      });
    });
  }

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