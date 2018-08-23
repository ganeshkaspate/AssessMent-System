import React from 'react';
import './MainCreateJobComponent.css';
import rexAssistant from '../../images/robo.png';
import SelectJob from '../SelectJob/SelectJobComponent';

export default class MainCreateJobComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateJobComp: false
        };
    }

    createJob(event) {
        this.setState({
            showCreateJobComp: true
        });

    }

    render() {
        return (
            <div className="container-fluid" id="create-job-container">
                <div className="row" >
                    {!this.state.showCreateJobComp && <div className="col-xs-offset-4 col-xs-4">
                        <div className="job-container">
                            <div className="row">
                                <div className="rez-assistant">
                                    <img src={rexAssistant} alt="rexImage" />
                                </div>
                                <div className="rexdata">
                                    <p><b>Hey, I am Rex ! </b> Your virtual assistant !</p>
                                </div>
                                <div className="jobData">
                                    <p>Your job list is empty.</p>
                                    <p>Create new job by clicking button below !</p>
                                </div>
                                <div className="createJobButton">
                                    <input
                                        type="button"
                                        className="btn btn-lg btn-primary btn-block create-button"
                                        onClick={(event) => this.createJob(event)}
                                        value="Create New Job" />
                                </div>
                            </div>
                        </div>
                    </div>}
                    {this.state.showCreateJobComp && <SelectJob />}
                </div>
            </div>
        )
    }
}