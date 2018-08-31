import React, { Component } from 'react';
import './App.css';
import logo1 from './images/logo1.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoList: [],
      text: '',
      error: false,
      index: null
    }

    this.getText = this.getText.bind(this);
  }

  getText(e) {
    let { text } = this.state;
    text = e.target.value;
    this.setState({ text })

  }

  addTodo() {
    let { todoList, text, index } = this.state;
    if (text !== "") {
      index === null ? todoList.push(text) : todoList[index] = text;
      text = "";
      this.setState({ todoList, text, error: false, index: null });
    }
    else {
      this.setState({ error: true })
    }
  }

  updateTodo(index, e) {
    let { todoList } = this.state;
    this.setState({ index, text: todoList[index] });
  }

  deleteList(indx) {
    const { todoList } = this.state;
    todoList.splice(indx,1);
    this.setState({todoList});
  }


  showlist() {
    const { todoList, index } = this.state;
    return (
      <ul>
        {
          todoList.map((items, indx) => {
            return (
              indx === index ?
                < li key={Math.random().toString().substring(2, 6)} style={{ fontSize: '1.3em', color: 'red' }}>
                  {items}
                  < i className="fa fa-undo" style={{ color: '#5BB06C', margin: '10px' }} onClick={(e) => this.updateTodo(indx, e)}></i>
                  <i className="fa fa-trash" style={{ color: 'red' }} id="check"></i>
                </li >
                :
                < li key={Math.random().toString().substring(2, 6)} style={{ fontSize: '1.3em' }}>
                  {items}
                  < i className="fa fa-undo" style={{ color: '#5BB06C', margin: '10px' }} onClick={(e) => this.updateTodo(indx, e)}></i>
                  <i className="fa fa-trash" style={{ color: 'red' }} onClick={() => this.deleteList(indx)}></i>
                </li >

            )

          })
        }
      </ul >
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
