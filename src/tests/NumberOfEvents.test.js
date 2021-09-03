import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents'

describe('<EventList /> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents number={32} updateNumber={() => {}}/>);
    });

	test('render text input', () => {
        expect(NumberOfEventsWrapper.find('input')).toHaveLength(1);
    });

    test('render text input correcty', async () => {
        expect(NumberOfEventsWrapper.find('input').prop('value')).toBe(32);
    });

    test('change state when text input changes', () => {
        const value = { target: { value: 2 }};
        NumberOfEventsWrapper.find('input').simulate('change', value);
        expect(NumberOfEventsWrapper.state('number')).toBe(2);
    });
});
