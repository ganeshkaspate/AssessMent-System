import axios from 'axios';
import HttpStatus from 'http-status-codes';
import { CREATE_JOB_PATH } from '../constants/AppConstants';

export const createjob = (bodyJson, token) =>
    axios.post(
        CREATE_JOB_PATH,
        bodyJson,
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