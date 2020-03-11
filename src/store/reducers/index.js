import { combineReducers } from "redux";

import messageReducer from "../reducers/messageReducer";
import userreducer from "../reducers/userreducers";
export default combineReducers({
    postedmessage: messageReducer,
    userr: userreducer
});