import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import JobDescriptionTable  from './UserJobs';


class ShowUserJob extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const template =
            this.props.jobDescription.isDataFetching ? (<Loader />) : (<JobDescriptionTable jdRecords={this.props.jobData}/>)
        return (
            <div className='user-job-wrapper'>
                {template}
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

export default connect(mapStateToProps, null)(ShowUserJob);