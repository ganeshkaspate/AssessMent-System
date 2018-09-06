import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import RowAddingEditor from '../CreateNewJob/CreateNewJob';
import './Jobs.css';


class UserJobs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jdRecords: props.jdRecords,
            isRowAddingEditorVisible: this.props.isRowEditingDisabled
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
            <div className="container-fluid user-job-container">
                <div className="row">
                    <div className="col-xs-12 " id="scrollableTable">
                        <Table striped condensed hover id="jobData">
                            <thead style={backgrounColour}>
                            <tr>
                                <th className='serial-column'>Sr.No.</th>
                                <th className='company-column'>Company Name</th>
                                <th className='technology-column'>Technology</th>
                                <th className='job-column'>Job Title</th>
                                <th className='total-score-column'>Total Score</th>
                                <th className='average-score-column'>Average Score</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.isRowEditingDisabled && <RowAddingEditor />}  
                                {this.props.jobData.map(function (item, key) {
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
                <div className="row">
                    <Table condensed  id="score">
                        <tbody>
                        <tr>
                            <td className='serial-column'></td>
                            <td className='company-column'></td>
                            <td className='technology-column'></td>
                            <td className='job-column'>
                                Yesterday's Score
                            </td>
                            <td className='total-score-column'>
                                <b>240</b>
                            </td>
                            <td className='average-score-column'>
                                <b>30</b>
                            </td>
                        </tr>
                        <tr>
                            <td className='serial-column'></td>
                            <td className='company-column'></td>
                            <td className='technology-column'></td>
                            <td className='job-column'>
                                Score Added Today
                            </td>
                            <td className='total-score-column'>
                                <b>60</b>
                            </td>
                            <td className='average-score-column'>
                                <b>00</b>
                            </td>
                        </tr>
                        <tr className='total-row'>
                            <td className='serial-column'></td>
                            <td className='company-column'></td>
                            <td className='technology-column'></td>
                            <td className='job-column'>
                                Upto Date Score
                            </td>
                            <td className='total-score-column'>
                                <b>300</b>
                            </td>
                            <td className='average-score-column'>
                                <b>30</b>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )

    }
}


function mapStateToProps(state) {
    console.log(state.JobDescriptionData.isRowEditingDisabled);
    return {
        jobDescription: state.JobDescriptionData,
        jobData: state.JobDescriptionData.jobData.data,
        isRowEditingDisabled: state.JobDescriptionData.isRowEditingDisabled
    }
}

export default connect(mapStateToProps, null)(UserJobs);