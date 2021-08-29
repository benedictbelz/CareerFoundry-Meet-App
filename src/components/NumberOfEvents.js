import React, { Component } from 'react';

class NumberOfEvents extends Component {

    constructor() {
        super();
        this.state = {
            query: ''
        }
    }

    handleInput = event => {
        this.setState({ query: event.target.value });
    }

	render() {
		return (
            <div className='numberOfEvents'>
                <input 
                    type='text'
                    className='numberOfEventsInput'
                    value={this.state.query}
                    onChange={this.handleInput}
                />
            </div>
        );
	}
}
export default NumberOfEvents;
