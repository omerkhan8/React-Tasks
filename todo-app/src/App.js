import React, { Component } from 'react';
import './App.css';
import logo1 from './images/logo1.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      text: ''
    }

    this.getText = this.getText.bind(this);
  }

  getText(e) {
    let { text } = this.state;
    text = e.target.value;
    this.setState({ text })

  }

  addTodo() {
    let { todoList, text } = this.state;
    todoList.push(text);
    text = '';
    this.setState({ todoList, text });
    console.log(this.state)
  }



  renderHeader() {
    return (
      <div className='navBarr'>
        <img src={logo1} alt="logo" className='logo1' />
        Todo App
        </div>
    )
  }

  renderBody() {
    return (
      <div>
        <div className='input'>
          <input type="text" onChange={this.getText} />
          <span className="icon11">
            <i className="fa fa-plus-square" style={{ fontSize: '40px', color: '#5BB06C', }} onClick={() => this.addTodo()}></i>
          </span>
        </div>
        <div className='myList'>

        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}

      </div>

    );
  }
}

export default App;
