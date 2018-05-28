import React from 'react';
import {connect} from 'react-redux';


const Footer = ({all, active, completed}) => (
  <div className='footer'>
    {completed} tasks done. {active} tasks to do out of {all}.
  </div>
)

export default connect(
  (state) => ({
    all: state.todo.todos.length,
    active : state.todo.todos.filter(t => !t.isComplete).length,
    completed: state.todo.todos.filter(t => t.isComplete).length
  }),
)(Footer);
