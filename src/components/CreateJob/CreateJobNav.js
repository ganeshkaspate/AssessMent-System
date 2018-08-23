import React from 'react';
import rexlogo from '../../images/app.png';
import './CreateJobNav.css';
import { connect } from 'react-redux';

export class CreateJobNav extends React.Component {

    render() {
        return (
            <div id="createjob">
                <img src={rexlogo} className="rex-logo-job" />
                <span> <span> > </span> <b>{this.props.label}</b> </span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        label: state.JobDescriptionData.label
    }
}

export default connect(mapStateToProps, null) (CreateJobNav);