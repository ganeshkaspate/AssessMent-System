import React from 'react';
import './SignInComponent.css';

const SignInComponent = function (props) {
    return (
        <div className="signInLabel">
          { (!props.hasUserLogIn) && <span> <b>Sign In To </b> </span> }
        </div>
    )
}

export default SignInComponent;