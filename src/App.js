// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all'
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  changeLength = (length) => {
    getEvents().then((events) => {
      const eventlength = (length === '32') ?
        events :
        events.filter((event) => event.length === length);
      this.setState({
        events: eventlength
      });
    });
  }


  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={numberOfEvents} changeAmount={this.changeAmount} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;