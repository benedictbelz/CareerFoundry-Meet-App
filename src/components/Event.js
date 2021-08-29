import React, { Component } from 'react';

class Event extends Component {

    constructor() {
        super();
        this.state = {
            showDetails: false
        }
    }

    handleClick() {
        if (!this.state.showDetails)
            this.setState({ showDetails: true });
        else
            this.setState({ showDetails: false });
    }

	render() {
		return (
            <div className='event'>
                <button 
                    className='showDetails'
                    onClick={() => this.handleClick()}
                >Show Details</button>
                <div className='details'>
                    More Details...
                </div>
            </div>
        );
	}
}
export default Event;
