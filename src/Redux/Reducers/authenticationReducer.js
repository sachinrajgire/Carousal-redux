
import { SLIDE_RIGHT, SLIDE_LEFT  } from "../ActionTypes/actiontypes";

const initialState = {
  isAuthenticated:false
};


export default function(state = initialState, action) {
  console.log(action,'action')
  switch (action.type) {
    case SLIDE_RIGHT: {
  
    let newRecords = {
      ...state,
      records:action.payload
    }
    return newRecords
    
    }

  
    default:
      return state;
  }
}