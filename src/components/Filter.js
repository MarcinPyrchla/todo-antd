import React from 'react';
import { Badge } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Filter = ({all, active, completed, filter}) => (
  <div className='filter'>
    <Badge count={all}>
      <Link to='/' className={filter === undefined ? "current-link" : ""}>All</Link>
    </Badge>
    {
      active ?
      <Badge count={active}>
        <Link to='/active' className={filter === "active" ? "current-link" : ""}>Active</Link>
      </Badge> : null
    }
    {
      completed ?
      <Badge count={completed}>
        <Link to='/completed' className={filter === "completed" ? "current-link" : ""}>Completed</Link>
      </Badge> : null
    }
  </div>
)

export default connect(
  (state, ownProps) => ({
    filter: ownProps.filter,
    all: state.todo.todos.length,
    active : state.todo.todos.filter(t => !t.isComplete).length,
    completed: state.todo.todos.filter(t => t.isComplete).length
  }),
)(Filter);
