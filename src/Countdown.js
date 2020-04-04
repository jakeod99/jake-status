import React from 'react';
import './App.css';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="detail-container-small">
                <div class="detail-title-container">
                    <h3 class="detail-title">Available until</h3>
                    <div class="detail-content-container-small">
                        <p>feature coming soon</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Countdown;