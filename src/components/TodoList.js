import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
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


    const enterAnimation = {
      animation: "slideDown",
      stagger: 50,
      duration: 300,
      backwards: false,
      display: 'block',
      style: {
        // Since we're staggering, we want to keep the display at "none" until Velocity runs
        // the display attribute at the start of the animation.
        display: 'none',
      },
    };

    const leaveAnimation = {
      animation: "slideUp",
      stagger: 50,
      duration: 300,
      backwards: false,
    };


    return (
      <div className="Todo-List">
        <VelocityTransitionGroup
           component="ul"
           runOnMount={true}
           enter={enterAnimation}
           leave={leaveAnimation}>
            {this.props.todos.map(todo => (
              <TodoItem key={todo.id}
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}
                {...todo} />
            ))}
        </VelocityTransitionGroup>
      </div>
    )
  }
}


export default connect(
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter) }),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList);
