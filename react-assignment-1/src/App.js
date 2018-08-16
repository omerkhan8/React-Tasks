import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const name = "Hello World";
    const obj = { name: "Hello World Object" }
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
    const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]


    return (
      <div id="main">
        <div id="nav"><h3>First React Assignment </h3></div>
        <div>
          <p>{name}
            <br />
            {obj.name}
            <br />
            {data.map(val => <li key={Math.random().toString().slice(2, 6)} >{val}</li>)}
            <br />
          </p>
          <ol>
            {list.map(val => <li key={Math.random().toString().slice(2, 6)}>{val.name}</li>)}
          </ol>
          <h5>Complex:</h5>
          <ol>
            {complex.map(val => <li key={Math.random().toString().slice(2, 6)}>{val.company}
              <ul>{val.jobs.map(items => <li key={Math.random().toString().slice(1, 6)}>{items}</li>)}</ul></li>)}
          </ol>

        </div>

      </div>
    );
  }
}

export default App;
