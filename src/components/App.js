import React, { Component } from 'react';
import { extractLocations, getEvents } from '../api';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import '../css/nprogress.css';
import '../css/App.css';

class App extends Component {
	state = {
		events: [],
		locations: [],
		number: 32,
		location: 'all'
	}

	componentDidMount() {
		this.mounted = true;
		getEvents().then(events => {
			events = events.slice(0, this.state.number);
			if (this.mounted) this.setState({ events, locations: extractLocations(events) })
		});
	}

	componentWillUnmount(){
		this.mounted = false;
	}

	updateEvents = (location, number) => {
		getEvents().then(element => {
			let events = (location === 'all')
		  		? element
				: element.filter(event => event.location === location);
			events = events.slice(0, number);
		  	this.setState({ events, location });
		});
	}

	updateNumber = number => {
		this.setState({ number });
		this.updateEvents(this.state.location, number);
	}

	render() {
		return (
			<div id="App">
				<div id='Header'>
					<div id='Meet'>
						Meet
					</div>
					<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
					<NumberOfEvents number={this.state.number} updateNumber={number => this.updateNumber(number)}/>
				</div>
				<EventList events={this.state.events}/>
			</div>	
		);
	}
}

export default App;
