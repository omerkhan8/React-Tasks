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
          <h3>Question:1</h3>
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

          <hr />

          <h3>
            Q2) Briefly explain with an example what's the difference between
              import Something from 'package' VS import 	&#123;Something	&#125; from 'package'?
              <br />
            Answer:
          </h3>
          <p id="answer">import React from 'react' <br />
            The above is a default import. Default imports are exported with export default .... There can be only a single default export. <br />
            <br />
            import &#123;Component&#125; from 'react'<br />
            But this is a member import (named import). Member imports are exported with export .... There can be many member exports.<br />
            <br />
            You can import both by using this syntax:
            <br />
            import React, &#123;Component&#125; from 'react';<br />
            In JavaScript the default and named imports are split, so you can't import a named import like it was the default. The following, sets the name Component to the default export of the 'react' package (which is not going to be the same as React.Component:
              <br /><br />
            import Component from 'react'; </p>

            <hr />
            <h3>Question:3</h3>
        </div>

      </div>
    );
  }
}

export default App;
