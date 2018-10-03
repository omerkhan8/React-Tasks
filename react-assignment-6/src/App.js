import React, { Component } from 'react';
import './App.css';
import Kid from './components/Kid/Kid';
import Teacher from './components/Teacher/Teacher';
import Judge from './components/Judge/Judge';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      volume: 0,
      leaveKid: false,
      leaveJudge: false
    }
    this.updateSteps = this.updateSteps.bind(this);
    this.updateEmotion = this.updateEmotion.bind(this);
    this.getStars = this.getStars.bind(this);
    this.leaveJudge = this.leaveJudge.bind(this);
  }

  static getDerivedStateFromProps() {
    return { volume: 5 }
  }

  updateSteps(furtherSteps) {
    this.setState({ furtherSteps })
  }

  updateEmotion(emotion) {
    this.setState({ emotion });
  }

  getStars(stars) {
    this.setState({ stars });
  }

  leaveJudge(leaveJudge) {
    this.setState({ leaveJudge });
  }

  render() {
    const { furtherSteps, leaveKid, leaveJudge } = this.state;


    return (
      <div>
        <h1>Kid</h1>
        {
          !leaveKid &&
          <Kid dressColor={'cyan'} furtherSteps={furtherSteps}
            updateEmotion={this.state.emotion} stars={this.state.stars} leaveJudge={this.leaveJudge} />
        }
        <br />
        <br />
        <br />
        <h1>Teacher</h1>
        <Teacher updateSteps={this.updateSteps} />

        <br />
        <br />

        <h1>Judge</h1>
        {
          !leaveJudge &&
          <Judge updateEmotion={this.updateEmotion} getStars={this.getStars} />
        }
        <br />
        <br />
        <button onClick={() => { this.setState({ leaveKid: true }) }}>Ask Kid to Leave</button>
      </div>
    );
  }
}

export default App;
