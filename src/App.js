import React, { Component } from 'react';
import { mockData } from './mock-data';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CitySearch />
				<EventList />
				<NumberOfEvents />
			</div>	
		);
	}
}

export default App;
