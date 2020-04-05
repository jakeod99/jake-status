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
      shift: -1, // Time of next availability shift
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
          color: this.getColor(stress, availability.available),
          available: availability.available,
          shift: availability.shift
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
    const timeMax = (new Date(Date.now() + 24 * 60 * 60 * 1000)).toISOString();
    const timeMin = (new Date()).toISOString();
    const calID = process.env.REACT_APP_CALENDAR_ID;
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        timeMin: timeMin,
        timeMax: timeMax,
        items: [
          {
            id: calID
          }
        ]
      })
    };
    const call = "https://www.googleapis.com/calendar/v3/freeBusy?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    return fetch(call, requestOptions).then(res => res.json()).then(json => {
      let available = true;
      let shift;
      const nextEvent = json.calendars[calID].busy[0];
      if (typeof nextEvent === "undefined") {
        shift = null;
      } else if ((new Date(nextEvent.start)) <= (Date.now() + 5 * 60 * 1000)) {
        available = false;
        shift = nextEvent.end;
      } else {
        shift = nextEvent.start;
      }
      return ({
        available: available,
        shift: shift
      });
    });
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
    let message;
    let elaboration;
    if (this.state.available) {
      if (this.state.stress == -1) {
        message = "404: Availability unavailable :("
        elaboration = "(Something went wrong retrieving availability)"
      } else if (this.state.stress <= 2) {
        message = "Currently available!";
        elaboration = "(Come say hi!)";
      } else if (this.state.stress <= 4) {
        message = "Mostly available";
        elaboration = "(We can probably talk)";
      } else if (this.state.stress <= 6) {
        message = "Kinda available";
        elaboration = "(I might be able to talk)";
      } else {
        message = "Currently swamped";
        elaboration = "(But available if we really need to talk)";
      }
    } else {
      message = "Currently unavailable"
      elaboration = "(Please do not disturb until next availability)"
    }
    return (
      <span>
        <h1 class="title">Jake Status</h1>
        <div class="availability">
          <h2 class="message">{message}</h2>
          <p class="elaboration">{elaboration}</p>
        </div>
        <div class="detail-section">
          <Stress stress={this.state.stress}/>
          <Vibe stress={this.state.stress}/>
          <Countdown available={this.state.available} shift={this.state.shift}/>
        </div>
      </span>
    );
  }
  
}

export default App;