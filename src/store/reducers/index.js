import { combineReducers } from "redux";

import messageReducer from "../reducers/messageReducer";
export default combineReducers({
    postedmessage: messageReducer
});