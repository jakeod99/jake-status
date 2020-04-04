import React from 'react';
import './App.css';
import Stress from './Stress';
import Vibe from './Vibe';
import Countdown from './Countdown';


require('dotenv').config();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stress: -1, // 0-10 stress level provided by To Do google sheet
      color: "#AFAFAF", // background color, determined by stress/availability
      available: true, // currently available? provided by google calendar
      countdown: 0, // remaining seconds until availability shift
    };
    this.updateState = this.updateState.bind(this);
  }
  
  componentDidMount() {
    this.updateState();
    // window.addEventListener('', this.updateState);
  }
  
  componentWillUnmount() {
    // window.addEventListener('', this.updateState);
  }

  updateState() {
    this.fetchStress().then(stress => {
      this.fetchAvailability().then(availability => {
        this.setState({
          stress: stress,
          color: this.getColor(stress, availability),
          available: availability,
          countdown: 0
        });
      });
    });
  }

  async fetchStress(cell) {
    cell = (typeof cell === "undefined") ? "E17" : cell; //E17 is where Stress Level is stored
    let call = "https://sheets.googleapis.com/v4/spreadsheets/" + process.env.REACT_APP_TODO_ID;
    call += "/values/Aggregate!" + cell + "?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    return fetch(call).then(res => res.json()).then(json => json.values[0][0]);
  }

  async fetchAvailability() {
    return true;
  }

  getColor(stress, available) {
    if (typeof available === "undefined" || !available) {
      return "#FFBFBF";
    } else {
      switch (stress) {
        case "0": return "#BFFFBF";
        case "1": return "#CAFFBF";
        case "2": return "#D4FFBF";
        case "3": return "#DFFFBF";
        case "4": return "#EAFFBF";
        case "5": return "#F4FFBF";
        case "6": return "#FFFFBF";
        case "7": return "#FFF4BF";
        case "8": return "#FFEABF";
        case "9": return "#FFDFBF";
        case "10": return "#FFD4BF";
        default: return "#AFAFAF";
      };
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