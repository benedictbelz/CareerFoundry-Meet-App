import React, { Component } from 'react';
import ModalPortal from './ModalPortal';

class Modal extends Component {

    convertDate(date) {
        return new Date(date).toString().slice(3, 21);
    }

    componentDidMount() {
        const scroll = window.scrollY;
        window.onscroll = () => window.scrollTo(0, scroll);
        document.getElementById('Modal').style.top = '' + scroll + 'px';
    }

    componentWillUnmount() {
        document.body.classList.remove('modal');
        window.onscroll = () => {};
    }

    render() {
        const { event: { description, htmlLink, summary, start, end }} = this.props;
        return (
            <ModalPortal>
                <div id='Modal'>
                    <div id='content'>
                        <div id='close' onClick={() => this.props.closeModal()} />
                        <div id='title'>{summary}</div>
                        <div id='description'>{description}</div>
                        <div id='start'>Start: {this.convertDate(start.dateTime)}</div>
                        <div id='end'>End: {this.convertDate(end.dateTime)}</div>
                        <a href={htmlLink} target='_blank' rel='noreferrer'>Mark Event</a>
                    </div>
                </div>
            </ModalPortal>
        )
    }

}

export default Modal;
