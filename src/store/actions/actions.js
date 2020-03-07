import { SIGNUP, POST_MESSAGE } from "./types";
const apiURL = 'http://localhost:8080';
export const Signup = (postData) => dispatch => {
    fetch(`${apiURL}/signip`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(newUser => dispatch({
        type: SIGNUP,
        payload: newUser
    }))
}

export const PostMessage = (postData)=> dispatch =>{
    fetch(`${apiURL}/postmessage`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(data => dispatch({
        type: POST_MESSAGE,
        payload: data
    }))
}