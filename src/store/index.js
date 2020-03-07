
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const middleWare = [thunk];
const initialState = {
    navitems : []
};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleWare), composeWithDevTools()));
export default store;
