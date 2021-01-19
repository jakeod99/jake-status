import React from 'react';
import './App.css';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
    }

    getUntil(date, displayTime) {
        if (date === (new Date()).toLocaleDateString()) {
            return (
                <div class="detail-content-container-small">
                    <h1 class="display-time">{displayTime}</h1>
                    <p class="elaboration">({date})</p>
                </div>
            );
        }
        return (
            <div class="detail-content-container-small">
                <h1 class="display-time">Tomorrow</h1>
            </div>
        );
    }

    render() {
        const title = (this.props.available) ? "A" : "Una";
        const shift = new Date(this.props.shift);
        const time = shift.toLocaleTimeString();
        const displayTime = time.substring(0, time.length - 6) + time.substring(time.length - 3);
        const date = shift.toLocaleDateString();
        return (
            <div class="detail-container-small">
                <div class="detail-title-container">
                    <h3 class="detail-title">{title}vailable until</h3>
                    {this.getUntil(date, displayTime)}
                </div>
            </div>
        );
    }

}

export default Countdown;