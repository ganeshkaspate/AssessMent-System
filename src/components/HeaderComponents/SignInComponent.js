import React from 'react';
import './SignInComponent.css';
import SearchJob from '../SearchJobComponent/SearchJobComponent';

class SignInComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const template = 
        (!this.props.hasUserLogIn) 
            ?(
                 <div className="signInLabel col-xs-12">
                     <span> <b>Sign In To </b> </span>
                </div>
                ) 
            :( <SearchJob />
                )
        return (
            <div>
            {template}
            </div>   
        )
    }

}

export default SignInComponent;