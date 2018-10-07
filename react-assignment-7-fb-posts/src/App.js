import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      postsObj: {
        createdBy: 'Omer Khan',
        avatar: 'link',
        description: 'this is my first post',
        images: [],
        createdAt: Date.now(),
        likes: []
      }
    }
  }

  render() {
    return (
      <div>
        <div className="postContainer">
          <Posts />
        </div>
      </div>
    )
  }
}

export default App;