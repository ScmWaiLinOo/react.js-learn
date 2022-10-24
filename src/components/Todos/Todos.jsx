import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
class Todos extends Component {
  state = {
    // todos: [
    //   {
    //     id: 1,
    //     title: "learn react",
    //   },
    //   {
    //     id: 2,
    //     title: "practice react",
    //   },
    // ],
    todos:[],
    todoTitle: "",
  };
  componentDidMount() { //first run
    console.log('componenetDidMount');
    fetch("https://jsonplaceholder.typicode.com/todos").then(res =>
      res.json()).then(data => this.setState({todos:data}));
  }
  componentDidUpdate(){
    //if data change
    console.log('update');
  }
  componentWillUnmount(){
    //subscribe unsubscribe true or false
    console.log('destory');
  }
  handleChange = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const todos = [...this.state.todos];
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    alert("A name was submitted: " + this.state.todoTitle);
    todos.push({ id, title: this.state.todoTitle });
    this.setState({ todos });
  };
  deleteTodo = (id) => {
    const todos = [...this.state.todos];
    // const index = todos.findIndex(todo =>todo.id === id);
    this.setState({ todos: todos.filter((todo) => todo.id !== id) });
  };
  updateTodo = (data) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex((todo) => todo.id === data.id);
    todos[index].title = data.title;
    this.setState(todos);
  };
  render = () => {
    console.log('render');
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          style={{ marginLeft: "4rem" }}
          type="text"
          name="title"
          value={this.state.todoTitle}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Save</button>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              title={todo.title}
              key={todo.id}
              deleteTodo={this.deleteTodo}
              id={todo.id}
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  };
}
export default Todos;
