import React from 'react';
import './App.css';

class Vibe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="detail-container">
                <div style={this.props.color}>
                    <h2 class="detail-title">Vibe</h2>
                    
                </div>
            </div>
        );
    }

}

export default Vibe;