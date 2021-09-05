import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {

	state = {
		query: '',
		suggestions: [],
		showSuggestions: undefined,
		infoText: ''
	}

	handleInput = event => {
		let value = event.target.value;
        let suggestions = this.props.locations.filter(location => location.toUpperCase().indexOf(value.toUpperCase()) > -1);
		if (suggestions.length === 0)
			this.setState({ query: value, suggestions, infoText: 'We can not find the city you are looking for. Please try another city...' })
		else
			this.setState({ query: value,  suggestions, infoText: '' });
	}

    handleClick = suggestion => {
		this.props.updateEvents(suggestion);
		if (suggestion === 'all')
			this.setState({ query: '', showSuggestions: false, infoText: '' });
		else
        	this.setState({ query: suggestion, showSuggestions: false, infoText: '' });
    }

	render() {
		return (
			<div id="CitySearch">
				<input
					type="text"
					className="city"
					placeholder="Search for cities"
					value={this.state.query}
					onChange={this.handleInput}
					onFocus={() => this.setState({ showSuggestions: true })}
				/>
				<ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
					{this.state.suggestions.map(suggestion => (
						<li key={suggestion} onClick={() => this.handleClick(suggestion)}>
							{suggestion}
						</li>
					))}
					<li key="all" onClick={() => this.handleClick("all")}>
						<b>See all cities</b>
					</li>
				</ul>
				<InfoAlert text={this.state.infoText} />
			</div>
		);
	}
}

export default CitySearch;
