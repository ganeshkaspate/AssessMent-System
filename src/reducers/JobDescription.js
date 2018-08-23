import { FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_JOBDESCRIPTION_FAILED, FETCHING_JOBS } from '../constants/AppConstants';


const initialState = {
    jobData: {},
    isDataFetching: false,
    dataFetched: false,
    error: false,
    label: ''
}

export default function JobDescriptionData(state = initialState, action) {
    switch (action.type) {
        case FETCHING_JOBS: {
            return {
                ...state,
                isDataFetching: true,
            }
        }
        case FETCHING_JOBDESCRIPTION_SUCCESS:
            return {
                ...state,
                isDataFetching: false,
                jobData: action.data,
                dataFetched: true,
                error: false,
                label: 'Job List'
            }
        case FETCHING_JOBDESCRIPTION_FAILED:
            return {
                ...state,
                dataFetched: false,
                isDataFetching: true,
                error: true
            }
        default:
            return state
    }
}