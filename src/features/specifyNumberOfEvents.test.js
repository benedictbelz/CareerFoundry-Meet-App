import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../components/App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
	test('When user hasn’t specified a number, 32 is the default number', ({given, when, then}) => {
		let AppWrapper;
        given("the user hasn't specified a number of events", () => {
            AppWrapper = mount(<App />);
        });
		when('the user see all events', () => {

        });
		then('the number of events should be 32', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event')).toHaveLength(32);
            expect(AppWrapper.state('number')).toBe(32);
            AppWrapper.unmount();
        });
	});

	test('User can change the number of events they want to see', ({given, when, then}) => {
		let AppWrapper;
        given('the user wanted to change the number of events', () => {
            AppWrapper = mount(<App />);
        });
		when('the user changes the number of events', () => {
            AppWrapper.find('#NumberOfEvents input').simulate('change', { target: { value: 12 } });
        });
		then('the number of events shoudl be the same as specified', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event')).toHaveLength(12);
            expect(AppWrapper.state('number')).toBe(12);
        });
	});

});
