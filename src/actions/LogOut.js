import history from '../history';
import { LOG_OUT_SUCCESS, FETCHING_DATA_FAILED } from '../constants/AppConstants';
import { logOut } from '../APIs/logOut';
import HttpStatus from 'http-status-codes';



export function processLogOut(token) {
    return (dispatch) => {
        sendLogOut(dispatch, token);
    }
}

//Handling sign out API response
export function sendLogOut(dispatch, token) {
    logOut(token)
        .then((response) => {
            if (response.status === HttpStatus.OK)
                dispatch(afterLogOut(response.payload))
            else
                dispatch(fetchFailure(response.status));
        })
}

export function afterLogOut() {
    history.push('/');
    return {
        type: LOG_OUT_SUCCESS
    }
}

export function fetchFailure(data) {
    return {
        type: FETCHING_DATA_FAILED,
        data: data,
    }
}