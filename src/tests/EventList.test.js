import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import EventList from '../components/EventList';
import Event from '../components/Event'

describe('<EventList /> component', () => {
    let EventListWrapper;

	beforeAll(() => {
		EventListWrapper = shallow(<EventList events={mockData} />);
	});

	test('render correct number of events', () => {
		expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
	});
});
