import React, { Component } from 'react';
import Modal from './Modal'

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
        const { event: { location, summary, start }} = this.props;
		return (
            <div className='Event'>
                <div className='overview'>
                    <div className='title'>{summary}</div>
                    <div className='date'>{this.convertDate(start.dateTime)}</div>
                    <div className='location'>{summary + ' | ' + location}</div>
                </div>
                {this.state.showDetails && <Modal closeModal={() => this.setState({ showDetails: false })} {...this.props}/>}
                <button className='showDetails' onClick={() => this.handleClick()}>
                    Show More
                </button>
            </div>
        );
	}
}
export default Event;
