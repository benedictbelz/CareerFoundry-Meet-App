import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        number: this.props.number,
        errorText: ''
    }

    handleInput = event => {
        let number = event.target.value;
        if (number < 0 || number > 32) {
            this.props.updateNumber(32);
            this.setState({ number, errorText: 'Please choose a number between 0 and 32...' })
        }
        else {
            this.props.updateNumber(number);
            this.setState({ number, errorText: '' })
        }
    }

	render() {
		return (
            <div id='NumberOfEvents'>
                <input 
                    type='number'
                    value={this.state.number}
                    onChange={this.handleInput}
                />
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
	}
}
export default NumberOfEvents;
