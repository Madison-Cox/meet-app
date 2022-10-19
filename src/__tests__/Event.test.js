import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render summart of event', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render details of event', () => {
    expect(EventWrapper.find('.information')).toHaveLength(1);
  });

  test('render button to show details', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('render details when button is clicked', () => {
    EventWrapper.find('.show-details').at(0).simulate('click');
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  test('render button to hide details', () => {
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });
});