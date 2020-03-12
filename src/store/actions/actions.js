import { SIGNUP, POST_MESSAGE, LOGIN_USER } from "./types";
import { API_URL } from "../../config/consts";

export const Signup = (postData) => dispatch => {
    fetch(`${API_URL}/signip`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(newUser => dispatch({
        type: SIGNUP,
        payload: newUser
    }))
}

export const PostMessage = (postData)=> dispatch =>{
    fetch(`${API_URL}/postmessage`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(data => dispatch({
        type: POST_MESSAGE,
        payload: data
    }))
}

export const SaveUserData = (userData) => dispatch=>{
    dispatch({
        type: LOGIN_USER,
        payload : userData
    })
}
