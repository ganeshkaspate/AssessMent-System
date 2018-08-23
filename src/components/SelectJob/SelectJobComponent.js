import React from 'react';
import rexAssistant from '../../images/robo.png';
import './SelectJob.css';
import CreateJobModal from './CreateJobModal';


class SelectJobComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            company: '',
            Technology: '',
            showModal: false,
        }
    }

    onChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    createJob(event) {
        event.preventDefault();
        this.setState(
            {
                showModal: !this.state.showModal
            });
    }

    render() {

        const { Technology, company } = this.state;
        const enabled = (!!Technology && Technology.length > 0) && (!!company && company.length > 0)

        const rowStyle = {
            margin: '0px'
        };

        const jobUpload = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }

        const or = {
            padding: '10px'
        }

        let lgClose = () => this.setState({ showModal: false });
        return (
            <div className="create-job-container col-xs-12">
                <div className="row" style={rowStyle}>
                    <div className="rez-assistant">
                        <img src={rexAssistant} alt="rexImage" />
                    </div>
                    <p id="jobText">{localStorage.getItem('userName')}, Fill below details to start with your first job ! </p>
                    <div className="selectjob col-xs-12">
                        <form className="form-inline text-center row" role="form">
                            <div className="col-xs-4">
                                <div className="form-group col-xs-12">
                                    <label className="control-label">company/project</label>
                                    <select id="company" name="company" className="form-control" onChange={this.onChange}>
                                        <option disabled selected value>None Selected</option>
                                        <option>Synerzip</option>
                                        <option>Avalara Solutions</option>
                                        <option>Tech Mahindra</option>
                                        <option>Amdocs</option>
                                        <option>Symantec</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="form-group  col-xs-12">
                                    <label>Select Technology</label>
                                    <select id="Technology" name="Technology" className="form-control" onChange={this.onChange}>
                                        <option disabled selected value>None Selected</option>
                                        <option>Java</option>
                                        <option>Angular Js</option>
                                        <option>Javascript</option>
                                        <option>Android</option>
                                        <option>Mongo DB</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div className="form-group col-xs-12" style={jobUpload}>
                                    <div className="row">
                                        <label style={or}>Job Description</label>
                                        <button className={`btn ${enabled ? "add-btn" : "jd-button"} `} disabled={!enabled} onClick={(event) => this.createJob(event)}>Add/Paste JD</button>
                                        <span style={or}>Or</span>
                                        <button className={`btn ${enabled ? "upload-btn" : "jd-button"} `} disabled={!enabled}>Upload JD File</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <CreateJobModal show={this.state.showModal} onHide={lgClose} company={this.state.company} technology={this.state.Technology} />
                </div>
            </div>
        )
    }
}

export default SelectJobComponent;