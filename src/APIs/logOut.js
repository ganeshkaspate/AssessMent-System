import axios from "axios/index";
import { LOG_OUT_URL } from '../constants/AppConstants';
import HttpStatus from 'http-status-codes';

// SIgnout API
export const logOut = (token) =>
    // axios.post(
    //     LOG_OUT_URL,
    //      {
    //         headers: { 'X-AUTH-TOKEN': token }
    //     }

    // )
    axios({ method: 'POST', url: LOG_OUT_URL, headers: { 'X-AUTH-TOKEN': token }})
        .then(data => {
            if (data.status === HttpStatus.OK) {
                return {
                    status: data.status,
                    payload: data.data
                };
            }
        }).catch(err => {
            console.log("1111Error in logout", err.response.status);
            return {
                status: err.response.status,
                payload: null
            };
        });