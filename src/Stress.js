import React from 'react';
import './App.css';

class Stress extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="detail-container-small">
                <div class="detail-title-container">
                    <h3 class="detail-title">Stress Level</h3>
                    <div class="detail-content-container-small">
                        <h1 class="stress-level"> {this.props.stress} </h1>
                    </div>
                </div>
            </div>
        );
    }

}

export default Stress;