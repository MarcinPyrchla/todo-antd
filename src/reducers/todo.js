import {getTodos, createTodo, updateTodo, destroyTodo} from '../lib/todoServices';
import {showMessage, MESSAGE_INFO, MESSAGE_WARNING, MESSAGE_ERROR} from './messages'

const initState = {
  todos: [],
  currentTodo: ''
}

export const TODO_ADD = 'TODO_ADD';
const UPDATE_CURRENT = 'UPDATE_CURRENT';
export const TODOS_LOAD = 'TODOS_LOAD';
export const TODO_REPLACE = 'TODO_REPLACE';
export const TODO_REMOVE = 'TODO_REMOVE';


export const updateCurrent = (value) => ({
    type: UPDATE_CURRENT,
    payload: value
});

export const loadTodos = (todos) => ({
    type: TODOS_LOAD,
    payload: todos
});

export const addTodo = (todo) => ({
    type: TODO_ADD,
    payload: todo
});

export const replaceTodo = (todo) => ({
    type: TODO_REPLACE,
    payload: todo
});

export const removeTodo = (id) => ({
    type: TODO_REMOVE,
    payload: id
});


export const fetchTodos = () => {
  return (dispatch) => {

    dispatch(showMessage({
      type: MESSAGE_INFO,
      title: 'Loading Todos',
      description: 'please wait...'
    }));

    getTodos()
      .then(todos => dispatch( loadTodos(todos)) )
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage({
      type: MESSAGE_INFO,
      title: 'Saving Todo',
      description: `Saving '${name}'`
    }));

    createTodo(name)
      .then( res => dispatch(addTodo(res)) )
  }
}

export const toggleTodo = (id) => {
  return(dispatch, getState) => {

    const {todos} = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};

    const name = toggled.name;
    const completed = toggled.isComplete ? 'completed' : 'not completed';

    dispatch(showMessage({
      type: MESSAGE_INFO,
      title: 'Saving Update',
      description: `'${name}' is ${completed}`
    }));


    updateTodo(toggled)
     .then(res => dispatch(replaceTodo(res)))
  }
}

export const deleteTodo = (id) => {
  return (dispatch, getState) => {
    //dispatch(showMessage('Removing Todo'));

    const {todos} = getState().todo;
    const todo = todos.find(t => t.id === id);
    const name = todo.name;

    dispatch(showMessage({
      type: MESSAGE_WARNING,
      title: 'Removing Todo',
      description: `'${name}' is removed`
    }));

    destroyTodo(id)
      .then( () => dispatch(removeTodo(id)) )
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {

    case 'active':
      return todos.filter(t => !t.isComplete);

    case 'completed':
      return todos.filter(t => t.isComplete);

    default:
      return todos;
  }
}


export default (state = initState, action) => {
  switch(action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos:state.todos.concat(action.payload)};

    case UPDATE_CURRENT:
      return {...state, currentTodo: action.payload};

    case TODOS_LOAD:
      return {...state, todos: action.payload};

    case TODO_REPLACE:
      return {...state,
         todos: state.todos
            .map(t => t.id === action.payload.id ? action.payload : t)
      }

    case TODO_REMOVE:
      return {...state,
         todos: state.todos
            .filter(t => t.id !== action.payload)
      }

    default:
      return state;
  }
}
