import React, { Component } from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import {notification} from 'antd';
import {connect} from 'react-redux';
import {updateCurrent, saveTodo} from '../reducers/todo';
import {showMessage, MESSAGE_ERROR} from '../reducers/messages';


class TodoForm extends Component {

  handleInputChange = (event) => {
    //console.log("value: " + event.target.value);
    const {updateCurrent} = this.props;
    updateCurrent(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if( this.props.currentTodo.length >= 5 ) {
      this.props.saveTodo(this.props.currentTodo);
    } else {

      const {showMessage} = this.props;

      showMessage({
        type: MESSAGE_ERROR,
        title: 'Error',
        description: 'Task has to be at least 5 chars long'
      });

    }
  }

  render() {

    //console.log("render form");
    const {currentTodo} = this.props;

    return (
      <form layout="inline" onSubmit={this.handleSubmit}>
          <Input
            size='large'
            placeholder='Add some task'
            value={currentTodo}
            onChange={this.handleInputChange}
            addonBefore={<Icon type="edit" />}
          />
      </form>
    )
  }
}

export default connect(
  (state) => ({currentTodo: state.todo.currentTodo}),
  {updateCurrent, saveTodo, showMessage}
)(TodoForm);
