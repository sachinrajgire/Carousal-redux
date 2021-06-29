
import { SLIDE_RIGHT, SLIDE_LEFT ,UPDATE_DATA, SET_LOADING_TRUE , SET_LOADING_FALSE } from "../ActionTypes/actiontypes";
const initialState = {
  curr:0 ,
  posts :[],
  isLoading:false
};


export default function(state = initialState, action) {

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
    case UPDATE_DATA: {
 
    let newState = {
      ...state,
      posts:action.payload
    }
    return newState
    
    }
    case SET_LOADING_TRUE: {
 
    let newState = {
      ...state,
      isLoading:true
    }
    return newState
    
    }
    case SET_LOADING_FALSE: {
 
    let newState = {
      ...state,
      isLoading:false
    }
    return newState
    
    }

  
    default:
      return state;
  }
}