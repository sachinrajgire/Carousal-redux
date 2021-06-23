import { SLIDE_RIGHT, SLIDE_LEFT, UPDATE_DATA,SET_LOADING_FALSE,SET_LOADING_TRUE} from "../ActionTypes/actiontypes";



export const slideRight = (len) =>{
  return ({type: SLIDE_RIGHT, payload:{totalImages:len}})
} 
export const updateData = (responseBody) =>{
  return ({ type: UPDATE_DATA, payload: responseBody })
} 
export const setLoadingToTrue = () =>{
  return ({ type: SET_LOADING_TRUE })
} 
export const setLoadingToFalse = () =>{
  return ({ type: SET_LOADING_FALSE})
} 

export const fetchPosts = () => async dispatch => {
  try {
    dispatch(setLoadingToTrue())
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url)
    const responseBody = await response.json();
    console.log(responseBody,'responseBody');
    dispatch(updateData(responseBody))
    dispatch(setLoadingToFalse())
    
  } catch (error) {
    dispatch(setLoadingToFalse())
    console.error(error);
  }
}
