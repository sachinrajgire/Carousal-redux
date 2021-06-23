import { createStore ,applyMiddleware, compose} from "redux";
import rootReducer from "../Reducers/index.js";
import ReduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
export default store