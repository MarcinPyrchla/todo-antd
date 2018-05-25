import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import { Popconfirm } from 'antd';
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <Checkbox checked={isComplete} onChange={() => toggleTodo(id)}>
    {name}
    </Checkbox>
    <span className='delete-item'>
      <Popconfirm title="Are you sure delete this task?" onConfirm={() => deleteTodo(id)} okText="Yes" cancelText="No">
        <Button type="danger" icon="delete" >Remove</Button>
      </Popconfirm>
    </span>
  </li>
)


class TodoList extends Component {

  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    //console.log("Render list");
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} />
          ))}
        </ul>
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter) }),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);
