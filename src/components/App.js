import React, { Component } from 'react';
import { extractLocations, getEvents, checkToken, getAccessToken } from '../api';
import { ErrorAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import '../css/nprogress.css';
import '../css/App.css';
import EventGenre from './EventGenre';

class App extends Component {
	state = {
		online: false,
		events: [],
		locations: [],
		number: 32,
		location: 'all',
		showWelcomeScreen: undefined
	}

	async componentDidMount() {
		this.mounted = true;

		const accessToken = localStorage.getItem('access_token');
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get("code");
		this.setState({ showWelcomeScreen: !(code || isTokenValid), online: navigator.onLine });
		//if ((code || isTokenValid) && this.mounted)
			getEvents().then(async events => {
				//events = events.slice(0, await this.state.number);
				if (this.mounted) this.setState({ events, locations: extractLocations(events) });
			});
		window.addEventListener('online', () => this.setState({ online: true }));
		window.addEventListener('offline', () => this.setState({ online: false }));
	}

	componentWillUnmount(){
		this.mounted = false;
	}

	updateEvents = (location) => {
		getEvents().then(element => {
			let events = (location === 'all')
		  		? element
				: element.filter(event => event.location === location);
			events = events.slice(0, this.state.number);
		  	this.setState({ events, location });
		});
	}

	updateNumber = number => {
		this.setState({ number });
		this.updateEvents(this.state.location);
	}

	getData = () => {
		const { locations, events } = this.state;
		const data = locations.map(location => {
			const number = events.filter(event => event.location === location).length;
			const city = location.split(', ').shift();
			return {city, number};
		});
		return data;
	}

	render() {

		if (this.state.showWelcomeScreen === undefined) return <div className="App" />

		return (
			<div id="App">
				{!this.state.online &&
					<ErrorAlert text={'App is offline and uses cached data...'} />
				}
				<div id='Header'>
					<div id='Meet'>
						Meet
					</div>
					<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
					<NumberOfEvents number={this.state.number} updateNumber={number => this.updateNumber(number)}/>
				</div>
				<div id='Chart'>
					<EventGenre events={this.state.events}/>
					<ResponsiveContainer height={400}>
						<ScatterChart margin={{top: 20, right: 40, bottom: 20, left: 0}}>
							<CartesianGrid />
							<XAxis type="category" dataKey="city" name="city" />
							<YAxis type="number" dataKey="number" name="number of events" />
							<Tooltip cursor={{ strokeDasharray: '3 3' }} />
							<Scatter name="A school" data={this.getData()} fill="#4a4a4a" />
						</ScatterChart>
					</ResponsiveContainer>
				</div>
				<EventList events={this.state.events}/>
				{/* <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} /> */}
			</div>	
		);
	}
}

export default App;
