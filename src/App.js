import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stress from './Stress';
import Vibe from './Vibe';
import Countdown from './Countdown';


require('dotenv').config();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stress: 0, //google sheets api call
      color: "#AFAFAF", //google sheets api call
      available: true, //google calendar api call
      "time-until-availability-change": 0, //google calendar api call
    };
    this.updateStress = this.updateStress.bind(this);
  }
  
  componentDidMount() {
    this.updateStress();
    // window.addEventListener('', this.updateState);
  }
  
  componentWillUnmount() {
    // window.addEventListener('', this.updateState);
  }
  
  updateStress() {
    this.fetchStress().then(stress => {
      this.setState({
        stress: stress
      });    
    });
  }

  async fetchStress(cell) {
    cell = (typeof cell === "undefined") ? "E17" : cell; //E17 is where Stress Level is stored
    let call = "https://sheets.googleapis.com/v4/spreadsheets/" + process.env.REACT_APP_TODO_ID;
    call += "/values/Aggregate!" + cell + "?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    return fetch(call).then(res => res.json()).then(json => json.values[0][0]);
  }

  getColor(stress, available) {
    if (typeof stress === "undefined" || !available) {
      return "#AFAFAF";
    } else {
      return "#00FF00";
    }
  }

  render() {
    document.body.style = "background: " + this.state.color;
    return (
      <span>
        <h1 class="title">Jake Status</h1>
        <h2 class="availability">
          Currently (Un)available!
        </h2>
        <div class="detail-section">
          <Stress stress={this.state.stress}/>
          <Vibe stress={this.state.stress}/>
          <Countdown />
        </div>
      </span>
    );
  }
  
}

export default App;