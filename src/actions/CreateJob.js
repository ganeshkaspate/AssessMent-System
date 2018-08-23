import HttpStatus from 'http-status-codes';
import history from '../history';
import { createjob  } from '../APIs/createJob';
import { fetchUserJd  } from '../actions/GetUserJd';
import { FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_DATA_FAILED} from '../constants/AppConstants';

export function createJd(bodyjson, token) {
    return (dispatch) => {
        createJobDescription(dispatch, bodyjson, token);
    }
}

export function createJobDescription(dispatch, bodyjson, token) {
    createjob(bodyjson, token)
        .then((response) => {
            if (response.status === 200)
                dispatch(fetchUserJd(token))
            else
                dispatch(fetchFailure(response.status));
        })
}

export function fetchFailure(data) {
    return {
        type: FETCHING_DATA_FAILED,
        data: data,
    }
}