import React from 'react';
import { mount } from 'enzyme';
import {loadFeature, defineFeature} from 'jest-cucumber';
import App from '../components/App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
	test('An event element is collapsed by default', ({given, when, then}) => {
		let AppWrapper;
        given("the event element hasn't been selected", () => {

        });
		when('the user views the event element list', () => {
            AppWrapper = mount(<App />);
        });
		then('the user should see all events in collapsed form', () => {
            AppWrapper.update();
			expect(AppWrapper.find('.Event .details')).toHaveLength(0);
        });
	});

	test('User can expand an event to see its details', ({given, when, then}) => {
		let AppWrapper;
		given('the event element is listed on the screen', () => {
			AppWrapper = mount(<App />);
        });
		when('the user clicks on the event element', () => {
			AppWrapper.update();
			AppWrapper.find('.Event button').at(0).simulate('click');
        });
		then('the event element should expand and show the details', () => {
			expect(AppWrapper.find('.Event .details')).toHaveLength(1);
        });
	});

	test('User can collapse an event to hide its details', ({given, and, when, then}) => {
		let AppWrapper = mount(<App />);
		given('the event element has been expanded', () => {
			AppWrapper.update();
			AppWrapper.find('.Event button').at(0).simulate('click');
			expect(AppWrapper.find('.Event .details')).toHaveLength(1);
        });
		when('the user clicks on the event element again', () => {
			AppWrapper.find('.Event button').at(0).simulate('click');
        });
		then('the even element should collapse and hide the details', () => {
			expect(AppWrapper.find('.Event .details')).toHaveLength(0);
        });
	});
});
