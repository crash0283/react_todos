import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.state = {
      todos: [],
      errorMsg: ''
    }
  }
  addTodo(e) {
    e.preventDefault()
    var duplicate = this.state.todos.filter((item) => {
      return item === e.target.todo.value
    })

    if(duplicate[0] === e.target.todo.value) {
      this.setState({errorMsg: "Already Exists! Please Enter A New Todo..."})
    } else {
      this.setState({todos: this.state.todos.concat(e.target.todo.value), errorMsg: ''})

    }
    
    e.target.todo.value = ""
  }
  removeTodo(curTodo) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo !== curTodo
      }),
      errorMsg: ''
    })
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h1>Today's Todos...</h1>
            <form className="form-inline" onSubmit={this.addTodo}>
              <input type="text" name="todo" className="form-control mr-sm-2" />
              <input className="btn btn-primary" type="submit" value="Add Todo" />
              <small className="form-text text-danger ml-3">{this.state.errorMsg}</small>
            </form>
          </div>
          <div className="col-md-12">
            <ul className="list-group">
              {this.state.todos.map((todo, i) => <li className="list-group-item list-group-item-secondary" key={i}>{todo}<button className="btn btn-danger btn-sm rounded ml-3" onClick={(e) => this.removeTodo(todo)}>&times;</button></li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
