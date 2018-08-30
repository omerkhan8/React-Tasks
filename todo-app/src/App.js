import React, { Component } from 'react';
import './App.css';
import logo1 from './images/logo1.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      text: '',
      error: false
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
    if (text !== "") {
      todoList.push(text);
      text = "";
      this.setState({ todoList, text, error: false });
    }
    else {
      this.setState({ error: true })
    }
  }

  showlist() {
    const { todoList } = this.state;
    return (
      <ul className="list-group">
        {
          todoList.map(items => {
            return <li className="list-group-item" key={Math.random().toString().slice(2, 6)}>{items}</li>
          })
        }
      </ul>
    )
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
    const { error } = this.state;
    return (
      <div>
        <div className='input'>
          <input type="text" onChange={this.getText} value={this.state.text} />
          <span className="icon11">
            <i className="fa fa-plus-square" style={{ fontSize: '40px', color: '#5BB06C', }} onClick={() => this.addTodo()}></i>
          </span>
          {error && <p style={{ color: 'red' }}>please enter something to add.</p>}
        </div>
        <div className='myList'>
          {
            this.showlist()
          }
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
