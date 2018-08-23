import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Jobs.css';


class UserJobs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jdRecords: props.jdRecords
        }
    }

    render() {
        const compName = {
            fontSize: '14px'
        };
        const backgrounColour = {
            backgroundColor: '#dadada'
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 " id="scrollableTable">
                        <Table striped condensed hover id="jobData">
                            <thead style={backgrounColour}>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Company Name</th>
                                    <th>Technology</th>
                                    <th>Job Title</th>
                                    <th>Total Score</th>
                                    <th>Average Score</th>
                                </tr>
                            </thead>
                            <tbody>{this.props.jobData.map(function (item, key) {
                                return (
                                    <tr key={key}>
                                        <td><b style={compName}>{item.id}</b></td>
                                        <td><b style={compName}>{item.attributes.companyName}</b></td>
                                        <td>Xamarian Developer</td>
                                        <td>{item.attributes.name}</td>
                                        <td><b style={compName}>30</b></td>
                                        <td><b style={compName}>30</b></td>
                                    </tr>
                                )
                            })}</tbody>
                            
                        </Table>
                    </div>
                </div>
                {/*<div className="row">
                    <Table condensed hover id="score">
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    YesterDay's Score
                                </td>
                                <td >
                                    240
                                    </td>
                                <td >
                                    30
                                    </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>*/}

            </div>
        )

    }
}


function mapStateToProps(state) {
    return {
        jobDescription: state.JobDescriptionData,
        jobData: state.JobDescriptionData.jobData.data
    }
}

export default connect(mapStateToProps, null)(UserJobs);