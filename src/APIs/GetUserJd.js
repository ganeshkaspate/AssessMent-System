import axios from 'axios';
import HttpStatus from 'http-status-codes';
import { GET_USER_JD } from '../constants/AppConstants';


//API to generate auth token from LRSC
export const getUserJobs = (token) =>
    axios.get(
        GET_USER_JD,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-AUTH-TOKEN': token
            }
        }
    ).then(data => {
        if (data.status === HttpStatus.OK) {
            return {
                status: data.status,
                payload: data.data
            };
        }
    }).catch(err => {
        console.log("Error in authorization", err.response.status);
        return {
            status: err.response.status,
            payload: null
        };
    });