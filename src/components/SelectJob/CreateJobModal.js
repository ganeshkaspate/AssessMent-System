import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';
import thumbnail from '../../images/robo.png';
import './SelectJob.css';
import { connect } from 'react-redux';
import { createJd } from '../../actions/CreateJob';

class CreateJobModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: props.show,
            jdName: '',
            jobDescription: '',

        };
    }

    createJobDescription(event) {
        event.preventDefault();
        var bodyJson = {
            companyName: this.props.company,
            technology: this.props.technology,
            jobTitle: this.state.jdName,
            jobDescription: this.state.jobDescription,
            aboutUs: "Hii",
            address: "abcd",
            uniqueID: this.state.jdName,
            website: "http://www.synerzip.com/",
            location: "abcd"
        };
        this.props.createJd(bodyJson, this.props.token);
    }

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">
                        <div className="createjob">
                            <Image src={thumbnail} responsive />
                            <h5> Hi,
                                <span className="userNameJob"> {localStorage.getItem('userName')} </span>
                                - Type/Paste Job Name and Job Description.</h5>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="jobDescription">
                        <div className="row" id="jobTitle">
                            <div className="form-group col-md-offset-1 col-md-10">
                                <input
                                    type="text"
                                    id="jdName"
                                    className="form-control"
                                    onChange={(event) => this.setState({ jdName: event.target.value })}
                                    placeholder="Job Title" />
                            </div>
                        </div>
                        <div className="row" id="jobContent">
                            <div className="form-group col-md-offset-1 col-md-10">
                                <textarea
                                    className="form-control"
                                    id="jobDescriptionContent"
                                    onChange={(event) => this.setState({ jobDescription: event.target.value })}
                                    rows="5"
                                    placeholder="Job Description"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-md-offset-9 no-padding">
                                <input
                                    type="button"
                                    className="btn btn-lg btn-primary  btn-block login-button"
                                    onClick={(event) => this.createJobDescription(event)}
                                    value="Save" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createJd: (bodyJson, token) => dispatch(createJd(bodyJson, token)),
    }
}

function mapStateToProps(state) {
    return {
        token : state.tokenDetails.response.authToken,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateJobModal);