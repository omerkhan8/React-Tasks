import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      postsObj: {
        createdBy: 'Omer Khan',
        avatar: 'https://avatars2.githubusercontent.com/u/36782580?s=400&v=4',
        description: 'These are some beautiful wallpapers',
        images: ['https://images.unsplash.com/photo-1529348915581-73628f0cf212?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d262d07b765c845ff93801a07e15352&w=1000&q=80',
        'https://pbs.twimg.com/profile_images/779305023507271681/GJJhYpD2_400x400.jpg'
        ],
        createdAt: Date.now(),
        likes: 'Arshaq shakeel and 30 others'
      }
    }
  }

  render() {
    const { postsObj } = this.state;
    return (
      <div>
        <Navbar />
        <div>
          <div className="postContainer">
            <Posts data={postsObj} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;