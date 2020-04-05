import React from 'react';
import './App.css';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const title = (this.props.available) ? "A" : "Una";
        const shift = new Date(this.props.shift);
        const displayTime = shift.toLocaleTimeString()
        const date = shift.toLocaleDateString();
        return (
            <div class="detail-container-small">
                <div class="detail-title-container">
                    <h3 class="detail-title">{title}vailable until</h3>
                    <div class="detail-content-container-small">
                        <h3 class="display-time">{displayTime}</h3>
                        <p class="elaboration">({date})</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Countdown;