import { LOGIN_SUCCESS, LOGIN_FAILED, LOG_OUT_SUCCESS, FETCHING_DATA_FAILED } from '../constants/AppConstants';

const initialState = {
    response: [],
    hasUserLogIn: false,
    error: false,
    userName: ''
}

export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                hasUserLogIn: true,
                response: action.data,
                error: false,
                userName: localStorage.getItem('userName')
            }
        case LOGIN_FAILED:
            return {
                ...state,
                hasUserLogIn: false,
                response: action.data,
                error: true
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                hasUserLogIn: false,
                error: false
            }
        default:
            return state
    }
}