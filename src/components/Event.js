import React, { Component } from 'react';

class Event extends Component {

    state = {
        showDetails: false
    }

    handleClick() {
        if (!this.state.showDetails)
            this.setState({ showDetails: true });
        else
            this.setState({ showDetails: false });
    }

	render() {
        //const { event: { location, description, htmlLink, summary, start, end }} = this.props;
		return (
            <div className='event'>
                <div className='overview'>
                    {/* <div className='title'>{summary}</div>
                    <div className='location'>{location}</div> */}
                </div>
                <button className='showDetails' onClick={() => this.handleClick()}>
                    Show Details
                </button>
            </div>
        );
	}
}
export default Event;
