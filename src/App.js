import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stress from './Stress';
import Vibe from './Vibe';
import Countdown from './Countdown';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stress: 0, //google sheets api call
      color: "#000000", //google sheets api call
      available: true, //google calendar api call
      "time-until-availability-change": 102, //google calendar api call
      width: 0, 
      height: 0 
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    let newWidth = (window.innerWidth > 500) ? window.innerWidth : 500;
    let newHeight = (window.innerHeight > 300) ? window.innerHeight : 300;
    this.setState({ width: newWidth, height: newHeight });
  }

  getColor() {

  }

  render() {
    let styles = {
      window: {
        width: this.state.width,
        height: this.state.height,
        "background-color": this.state.color
      },
      status: {
        "text-align": "center",
        "margin-top": (this.state.height / 4) - 43,
        "margin-bottom": (this.state.height / 4) - 43
      },
      details: {
        height: (this.state.height - 25) / 2,
        float: "left"
      }
    }
    return (
      <window style={styles.window}>
        <h1 class="title">Jake Status</h1>
        <h2 style={styles.status}>
          Currently Available!
        </h2>
        <div style={styles.details} class="detail-section">
          <Stress height={styles.details.height} width={styles.window.width / 3}/>
          <Vibe height={styles.details.height} width={styles.window.width / 3}/>
          <Countdown height={styles.details.height} width={styles.window.width / 3}/>
        </div>
      </window>
    )
  }
  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;