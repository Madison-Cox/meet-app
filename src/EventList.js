// src/EventList.js

import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { event } = this.props;
    return (
      <ul className='EventList'>
        {event.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;