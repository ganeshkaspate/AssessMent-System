import { generateToken } from '../APIs/login';
import HttpStatus from 'http-status-codes';
import { LOGIN_FAILED, LOGIN_SUCCESS } from '../constants/AppConstants';
import history from '../history';


export function fetchToken(bodyjson) {
    return (dispatch) => {
        getLoginDetails(dispatch, bodyjson);
    }
}

export function getLoginDetails(dispatch, bodyjson) {
    console.log(bodyjson);
    generateToken(bodyjson)
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem('userName', bodyjson.username);
                dispatch(sendToken(response.payload))
            }
            else {
                dispatch(redirectUser(response.status));
            }
        })
}

export function sendToken(data) {
    return {
        type: LOGIN_SUCCESS,
        data: data,
    }
}

export function redirectUser(data) {
    return {
        type: LOGIN_FAILED,
        data: data,
    }
}
