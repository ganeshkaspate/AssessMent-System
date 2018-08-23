import { FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_JOBDESCRIPTION_FAILED, FETCHING_JOBS } from '../constants/AppConstants';
import { getUserJobs } from '../APIs/GetUserJd';
import history from '../history';


export function fetchUserJd(token) {
    return (dispatch) => {
        dispatch(fetchingJobDescription(dispatch));
        getUserJd(dispatch,token);
    }
};


export function getUserJd(dispatch, token) {
    getUserJobs(token)
        .then((response) => {
            if (response.status === 200)
                dispatch(sendUserJd(response.payload))
            else
                dispatch(fetchFailure(response.status));
        })
}

export function fetchFailure(data) {
    return {
        type: FETCHING_JOBDESCRIPTION_FAILED,
        data: data,
    }
}

export function sendUserJd(data) {
    if (data.data.length > 0) {
        history.push('/userjobs');
    } else {
        history.push('/createJob');
    }
    return {
        type: FETCHING_JOBDESCRIPTION_SUCCESS,
        data: data,
    }
}

export function fetchingJobDescription() {
    return {
        type: FETCHING_JOBS
    }
}