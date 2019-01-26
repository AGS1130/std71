import React, { Component, createRef, FormEvent } from "react";

type TodoFormProps = {
  addItem(todoItem: any): void;
};

type TodoFormState = {
  value: string;
};

class TodoForm extends Component<TodoFormProps, TodoFormState> {
  state = { value: "" };

  private textInput = createRef<HTMLInputElement>();

  componentDidMount() {
    const node: HTMLDivElement | null = this.textInput.current;

    if (node) {
      node.focus();
    }
  }

  onChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    var newItemValue: string = this.state.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <form id='todoForm' onSubmit={this.onSubmit} className='form-inline'>
        <input
          type='text'
          id='itemName'
          className='form-control'
          placeholder='add a new todo...'
          ref={this.textInput}
          value={this.state.value}
          onChange={this.onChange}
        />
        <button type='submit' className='btn btn-default'>
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
