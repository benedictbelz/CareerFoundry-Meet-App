import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './nprogress.css';
import './App.css';

class App extends Component {
	state = {
		events: [],
		locations: []
	}

	componentDidMount() {
		this.mounted = true;
		getEvents().then(events => {
			if (this.mounted) this.setState({ events, locations: extractLocations(events) })
		});
	}

	componentWillUnmount(){
		this.mounted = false;
	}

	updateEvents = (location) => {
		getEvents().then((events) => {
			const locationEvents = (location === 'all')
		  		? events
				: events.filter(event => event.location === location);
		  	this.setState({ events: locationEvents });
		});
	}

	render() {
		return (
			<div className="App">
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
				<EventList events={this.state.events}/>
				<NumberOfEvents />
			</div>	
		);
	}
}

export default App;
