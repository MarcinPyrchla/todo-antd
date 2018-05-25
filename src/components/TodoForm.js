import React, { Component } from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import {notification} from 'antd';
import {connect} from 'react-redux';
import {updateCurrent, saveTodo} from '../reducers/todo';


class TodoForm extends Component {

  handleInputChange = (event) => {
    //console.log("value: " + event.target.value);
    const {updateCurrent} = this.props;
    updateCurrent(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if( this.props.currentTodo ) {
      this.props.saveTodo(this.props.currentTodo);
    } else {
      notification.error({
        placement: 'bottomRight',
        //duration: 0,
        message: 'Task is empty',
        //description: 'This is just an info'
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
  {updateCurrent, saveTodo}
)(TodoForm);
