import React, { Component } from "react";

import TodoListItem from "./TodoListItem";

type TodoListProps = {
  items: any;
  removeItem(itemIndex: number): void;
  markTodoDone(itemIndex: number): void;
};

class TodoList extends Component<TodoListProps> {
  render() {
    var items = this.props.items.map((item: any, index: any) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return <ul className='list-group'> {items} </ul>;
  }
}

export default TodoList;
