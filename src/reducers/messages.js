import {TODO_ADD, TODOS_LOAD, TODO_REPLACE, TODO_REMOVE} from './todo';
import {notification} from 'antd';


const MESSAGE_SHOW = 'MESSAGE_SHOW';


export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default function(state='', action) {
  switch(action.type) {
    case MESSAGE_SHOW:

      notification.info({
        placement: 'bottomRight',
        //duration: 0,
        message: action.payload,
        //description: 'This is just an info'
      });


      return action.payload;

    case TODO_ADD:
    case TODOS_LOAD:
    case TODO_REPLACE:
    case TODO_REMOVE:
      return '';

    default:
      return state;
  }
}
