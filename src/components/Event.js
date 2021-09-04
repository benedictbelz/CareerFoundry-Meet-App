import React, { Component } from 'react';

class Event extends Component {

    state = {
        showDetails: false
    }

    convertDate(date) {
        return new Date(date).toString().slice(3, 21);
    }

    handleClick() {
        if (!this.state.showDetails)
            this.setState({ showDetails: true });
        else
            this.setState({ showDetails: false });
    }

	render() {
        const { event: { location, description, htmlLink, summary, start, end }} = this.props;
		return (
            <div className='Event'>
                <div className='overview'>
                    <div className='title'>{summary}</div>
                    <div className='location'>{this.convertDate(start.dateTime)}</div>
                    <div className='location'>{summary + ' | ' + location}</div>
                </div>
                {this.state.showDetails &&
                    <div className='details'>
                
                    </div>
                }
                <button className='showDetails' onClick={() => this.handleClick()}>
                    Show More
                </button>
            </div>
        );
	}
}
export default Event;
