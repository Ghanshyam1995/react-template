import { POST_MESSAGE } from "../actions/types";

const postMessageState = {
    PostedMessage : {}
}

export default function (state = postMessageState, action) {
    switch (action.type) {
        case POST_MESSAGE: return {
            ...state, PostedMessage: action.payload
        }
        default: return state;
    }
}