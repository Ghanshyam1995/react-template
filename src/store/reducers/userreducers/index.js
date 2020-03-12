import { LOGIN_USER } from "../../actions/types";
import { getStateFromStore, saveStateToLocalStorage } from "../../../helpers/statehelper";
const initialUserState = getStateFromStore('user');
const userstate = {
    user: initialUserState
}

export default function (state = userstate, action) {
    switch (action.type) {
        case LOGIN_USER:
            saveStateToLocalStorage("user", action.payload);
            return {
                ...state, user: action.payload
            }
        default: return state;
    }
}