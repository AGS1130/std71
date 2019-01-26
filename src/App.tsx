import React, { Component } from "react";
import moment from "moment";
import "./App.css";

import TodoHeader from "./components/presentational/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Timer from "./components/Timer";

class TodoApp extends Component {
  state = { todoItems: [], showTimer: false };

  addItem = (todoItem: { newItemValue: string }) => {
    let todoItems: Array<any> = this.state.todoItems;
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      date: moment().format("ll"),
      done: false
    });
    this.setState({ todoItems: todoItems });
  };

  removeItem = (itemIndex: number): void => {
    let todoItems: Array<any> = this.state.todoItems;
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  };

  markTodoDone = (itemIndex: number): void => {
    let todoItems: Array<any> = this.state.todoItems;
    let todo: any = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  };

  render() {
    return (
      <div id='main'>
        <TodoHeader />
        <button
          onClick={() => this.setState({ showTimer: !this.state.showTimer })}
        >
          Toggle Timer
        </button>
        {this.state.showTimer ? <Timer /> : null}
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;
