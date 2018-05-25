import {TODO_ADD, TODOS_LOAD, TODO_REPLACE, TODO_REMOVE} from './todo';
import {notification} from 'antd';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const MESSAGE_INFO = 'info';
export const MESSAGE_WARNING = 'warning';
export const MESSAGE_ERROR = 'error';

const initState = {
  type: '',
  title: '',
  desciption: ''
}

export const createMessage = (msg) => ({
  type: MESSAGE_SHOW,
  payload: msg
})

export const showMessage = (msg) => {
  return (dispatch) => {
    dispatch(createMessage(msg));
  }
}

export default function(state = initState, action) {
  switch(action.type) {
    case MESSAGE_SHOW:

      //console.log(action.payload);
      //console.log(action.payload.description);

      notification[action.payload.type]({
        placement: 'topRight',
        //duration: 0,
        message: action.payload.title,
        description: action.payload.description
      });

      return action.payload;

    /*
    case TODO_ADD:
    case TODOS_LOAD:
    case TODO_REPLACE:
    case TODO_REMOVE:
      return '';
    */

    default:
      return state;
  }
}
