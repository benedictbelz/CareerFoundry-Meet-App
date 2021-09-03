import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        number: this.props.number
    }

    handleInput = event => {
        let number = event.target.value;
        this.setState({ number })
        if (number < 0 || number > 32)
            this.props.updateNumber(32);
        else
            this.props.updateNumber(number);
    }

	render() {
		return (
            <div id='NumberOfEvents'>
                <input 
                    type='number'
                    value={this.state.number}
                    onChange={this.handleInput}
                />
            </div>
        );
	}
}
export default NumberOfEvents;
