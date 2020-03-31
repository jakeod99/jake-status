import React from 'react';
import './App.css';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="detail-container">
                <div style={{"background-color": this.props.color}}>
                    <h2 class="detail-title">Available until</h2>
                    <p>3:15</p>
                </div>
            </div>
        );
    }

}

export default Countdown;