import React from 'react';
import './loginComponent.css';
import app from '../../images/app.png';
import RezoomexLogo from '../RezoomexLogo/RezoomexLogo';
import '../RezoomexLogo/RezoomexLogo.css';
import { connect } from 'react-redux';
import { fetchToken } from '../../actions/Actions';
import ErrorComponent from '../../components/LoginFailed/LoginError';
import { withRouter } from "react-router-dom";
import {  fetchUserJd } from '../../actions/GetUserJd';


class LoginComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            password: ''
        }
    }

    handleClick(event) {
        event.preventDefault();
        var bodyJson = {
            "username": this.state.UserName,
            "password": this.state.password
        }
        this.props.fetchToken(bodyJson);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if(newProps.token) {
            this.props.fetchUserJd(newProps.token);
        }
    }

    render() {
        return (
            <div className="container-fluid login-container">
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-4">
                        {/*container to aling form in middle of screen*/}
                        <div className="form-container">
                            <div className="app-logo">
                                <img src={app} alt="text" />
                                <p className="app-name">Quick Assessment and Ranking System </p>
                            </div>
                            <div className="login-form">
                                {this.props.error && <ErrorComponent />}
                                <form className="form-horizontal" id="loginForm">
                                    <div className="form-group inner-addon left-addon" id="username-div">
                                        <i className="glyphicon glyphicon-user"></i>
                                        <input
                                            type="text"
                                            className="form-control usertext"
                                            id="UserName"
                                            onChange={(event, newValue) => this.setState({ UserName: event.target.value })}
                                            placeholder="Email" />
                                    </div>
                                    <div className="form-group inner-addon left-addon">
                                        <i className="glyphicon glyphicon-lock"></i>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            onChange={(event, newValue) => this.setState({ password: event.target.value })}
                                            placeholder="Password" />
                                    </div>
                                    <div className="forgot-password">
                                        <span> <a href="#"> Forgot Password ? </a> </span>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 no-padding">
                                            <input
                                                type="button"
                                                className="btn btn-lg btn-primary btn-block login-button"
                                                onClick={(event) => this.handleClick(event)}
                                                value="Login" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="col-xs-4 rex-logo-container">
                        {!this.props.hasUserLogIn && <RezoomexLogo />}
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchToken: (bodyJson) => dispatch(fetchToken(bodyJson)),
        fetchUserJd: (token) => dispatch(fetchUserJd(token))
    }
}

function mapStateToProps(state) {
    return {
        hasUserLogIn: state.tokenDetails.hasUserLogIn,
        error: state.tokenDetails.error,
        token : state.tokenDetails.response.authToken,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);