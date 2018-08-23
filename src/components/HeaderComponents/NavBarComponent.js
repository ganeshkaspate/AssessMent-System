import React from 'react';
import logo from '../../images/logo.png';
import line from '../../images/line.png';
import './NavBarComponent.css';
import SignInComponent from './SignInComponent';
import JobNav from '../CreateJob/CreateJobNav';
import Notification from '../Notification/Notification';
import {connect} from 'react-redux';

class NavBarComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid navbar-padding">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header col-xs-12">
                            <div className="row">
                                <div className="navbar-brand">
                                    <div className="line-position">
                                        <img src={logo} alt="Dispute Bills" className="logo" />
                                    </div>
                                </div>
                                {this.props.hasUserLogIn && <JobNav />}
                                {this.props.hasUserLogIn && <Notification />}
                            </div>
                        </div>
                    </div>
                </nav>
                <SignInComponent hasUserLogIn={this.props.hasUserLogIn} />                 
            </div>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        response : state.tokenDetails,
        hasUserLogIn: state.tokenDetails.hasUserLogIn,
        error: state.tokenDetails.error
    }
}

export default connect(mapStateToProps) (NavBarComponent);