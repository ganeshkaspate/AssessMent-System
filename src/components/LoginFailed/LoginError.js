import React from 'react';
import './LoginError.css';

const LoginError = function () {
    return (
        <div className="alert alert-danger" id="loginError" role="alert">
            <span>UserName or Password is wrong </span>
        </div>
    )
}

export default LoginError;