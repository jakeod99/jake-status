import React from 'react';
import './App.css';

class Stress extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="detail-container">
                <div style={this.props.color}>
                    <h2 class="detail-title">Stress Level</h2>
                </div>
            </div>
        );
    }

}

export default Stress;