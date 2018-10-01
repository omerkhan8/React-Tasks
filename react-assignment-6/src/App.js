import React, { Component } from 'react';
import './App.css';
import Kid from './components/Kid/Kid';
import Teacher from './components/Teacher/Teacher';
import Judge from './components/Judge/Judge';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      volume: 0
    }
    this.updateSteps = this.updateSteps.bind(this);
    this.updateEmotion = this.updateEmotion.bind(this);
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

  render() {
    const { furtherSteps } = this.state;


    return (
      <div>
        <h1>Kid</h1>
        <Kid dressColor={'cyan'} furtherSteps={furtherSteps} updateEmotion={this.state.emotion} />
        <br />
        <br />
        <br />
        <h1>Teacher</h1>
        <Teacher updateSteps={this.updateSteps} />

        <br />
        <br />

        <h1>Judge</h1>
        <Judge updateEmotion={this.updateEmotion} />
      </div>
    );
  }
}

export default App;
