import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../components/Event'

describe('<EventList /> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]}/>);
    });

	test('render show details', () => {
		expect(EventWrapper.find('.showDetails')).toHaveLength(1);
	});

    test('render state for button', () => {
        expect(EventWrapper.state('showDetails')).toBe(false);
        EventWrapper.find('button.showDetails').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
        EventWrapper.find('button.showDetails').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    })
});
