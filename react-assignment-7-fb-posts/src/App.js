import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      postsObj: [{
        createdBy: 'Omer Khan',
        avatar: 'https://avatars2.githubusercontent.com/u/36782580?s=400&v=4',
        description: 'These are some beautiful wallpapers',
        images: ['https://images.unsplash.com/photo-1529348915581-73628f0cf212?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d262d07b765c845ff93801a07e15352&w=1000&q=80',
          'https://pbs.twimg.com/profile_images/779305023507271681/GJJhYpD2_400x400.jpg'
        ],
        createdAt: Date.now(),
        likes: 'Arshaq shakeel and 30 others',
        comments: 1,
        love: true,
        wow: false,
        angry: true,
        haha: false,
        sad: false
      },
      {
        createdBy: 'Shoaib Khan',
        avatar: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/28685793_1879144032097137_4627626026866647494_n.jpg?_nc_cat=110&oh=efc0277851eb3b82084ce46620289b3b&oe=5C1601FB',
        description: 'lit',
        images: ['https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/19059434_366211810499992_5082170103564905646_n.png?_nc_cat=109&oh=0135b2a62f4f53e517054ffc4dcdcdb7&oe=5C5DDBC4'
        ],
        createdAt: Date.now(),
        likes: 'Omer Khan and 14 others',
        comments: 1,
        love: false,
        wow: true,
        angry: false,
        haha: true,
        sad: true
      },
      {
        createdBy: 'Hafiz Tanveer',
        avatar: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/29387165_2231830983751405_1332484393511419904_n.jpg?_nc_cat=101&oh=9fda12f21e370ac44504629341d89841&oe=5C5D3581',
        description: `Make sure you are taking care of 3 things in your life  
        1. Perform #Farz 
        2. Avoid #Sins 
        3. Earn #Halal 
        and these 3 things will assure your presence in Jannah.`,
        images: [],
        createdAt: Date.now(),
        likes: 'Zain Ahmed  and 42 others',
        comments: 6,
        love: true,
        wow: false,
        angry: false,
        haha: false,
        sad: true
      },
      {
        createdBy: 'Owais Khan',
        avatar: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/42824741_1545813845519490_2203294978484994048_n.jpg?_nc_cat=103&oh=9331745c5f99363abb6f678777428f16&oe=5C5FC084',
        description: `Accurate..!😂😂`,
        images: ['https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/42586440_1902196429897043_7451649403930017792_n.jpg?_nc_cat=100&oh=c5cc8dd0032cfdb6effecb2655aa8d8e&oe=5C5DDB99'],
        createdAt: Date.now(),
        likes: 'Aammad Imran and 42 others',
        comments: 8,
        love: false,
        wow: true,
        angry: false,
        haha: true,
        sad: false
      }
      ]
    }
  }

  render() {
    const { postsObj } = this.state;
    return (
      <div>
        <Navbar />
        <div>
          <div className="postContainer">
            <Posts postData={postsObj} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;