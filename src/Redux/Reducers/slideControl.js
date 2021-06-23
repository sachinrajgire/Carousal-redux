
import { SLIDE_RIGHT, SLIDE_LEFT  } from "../ActionTypes/actiontypes";
const initialState = {
  curr:0
};


export default function(state = initialState, action) {
  console.log(action,'action')

  switch (action.type) {
    case SLIDE_RIGHT: {
  const len= action.payload.totalImages -1
  const rUonLastImage= state.curr === len

    let newState = {
      ...state,
      curr:rUonLastImage ? 0 : state.curr+1
    }
    return newState
    
    }
    case SLIDE_LEFT: {
  const len= action.payload.totalImages -1
  const rUonFirstImage= state.curr === 0
    let newState = {
      ...state,
      curr:rUonFirstImage ? len : state.curr-1
    }
    return newState
    
    }

  
    default:
      return state;
  }
}