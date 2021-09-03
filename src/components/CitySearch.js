import React, { Component } from 'react';

class CitySearch extends Component {

	state = {
		query: '',
		suggestions: [],
		showSuggestions: undefined
	}

	handleInput = event => {
		const value = event.target.value;
        const suggestions = this.props.locations.filter(location => location.toUpperCase().indexOf(value.toUpperCase()) > -1);
		this.setState({ query: value,  suggestions });
	}

    handleClick = suggestion => {
        this.setState({ query: suggestion, showSuggestions: false });
		this.props.updateEvents(suggestion);
    }

	render() {
		return (
			<div className="CitySearch">
				<input
					type="text"
					className="city"
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
			</div>
		);
	}
}

export default CitySearch;
