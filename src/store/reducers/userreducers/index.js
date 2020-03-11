import { LOGIN_USER } from "../../actions/types";

const userstate = {
    user: {}
}

export default function (state = userstate, action) {
    switch (action.type) {
        case LOGIN_USER: return {
            ...state, user: action.payload
        }
        default: return state;
    }
}