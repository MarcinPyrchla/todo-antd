import React from 'react';
import { Badge } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Filter = ({all, active, completed}) => (
  <div className='filter'>
    <Badge count={all}>
      <Link to='/'>All</Link>
    </Badge>
    {
      active ?
      <Badge count={active}>
        <Link to='/active'>Active</Link>
      </Badge> : null
    }
    {
      completed ?
      <Badge count={completed}>
        <Link to='/completed'>Completed</Link>
      </Badge> : null
    }  
  </div>
)

export default connect(
  (state) => ({
    //all: state.todo.currentTodo,
    all: state.todo.todos.length,
    active : state.todo.todos.filter(t => !t.isComplete).length,
    completed: state.todo.todos.filter(t => t.isComplete).length
  }),
)(Filter);
