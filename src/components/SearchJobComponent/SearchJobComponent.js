import React from 'react';
import './SearchJob.css';
import rewards from '../../images/reward.png';
import { createNewRow } from '../../actions/GetUserJd';
import { connect } from 'react-redux';

class SearchJobComponent extends React.Component {

    handleClick(event) {
        console.log("calling this ");
        this.props.createNewRow();
    }


    render() {

        const search = {
            paddingRight: '0px',
            paddingTop: '5px'
        }

        const rewardscss = {
            height: '23px'
        }

        const buttonwidth = {
            width: '100%',
            paddingTop: '5px',
            backgroundColor: '#4986E7',
            colour: 'white'
        }
        const labelPadding = {
            marginTop: '12px'
        }
        const selectPadding = {
            paddingTop: '5px'
        }

        return (
            <div className="wrapper">
                <div className="col-xs-4" id="search-job">
                    <label className="control-label col-xs-3 noPadding" style={labelPadding} >Search Job</label>
                    <div className="col-xs-9" style={search}>
                        <input type="text"
                            className="form-control"
                            id="inputValidation"
                            placeholder="Search" />
                        <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </div>
                <div className="col-xs-3">
                    <label className="control-label col-xs-3 noPadding" style={labelPadding} >Arrange By</label>
                    <div className="col-xs-9" style={selectPadding}>
                        <select id="company" name="company" className="form-control">
                            <option disabled selected value>None Selected</option>
                            <option>Synerzip</option>
                            <option>Avalara Solutions</option>
                            <option>Tech Mahindra</option>
                            <option>Amdocs</option>
                            <option>Symantec</option>
                        </select>
                    </div>
                </div>
                <div className="col-xs-2" style={selectPadding}>
                    <div className="col-xs-12">
                        <button type="submit" style={buttonwidth} className="btn" onClick={(event) => this.handleClick(event)}>
                            <span>+</span>
                        </button>
                    </div>
                </div>
                <div className="col-xs-3" style={selectPadding}>
                    <div className="points col-xs-2">
                        <img src={rewards} style={rewardscss} alt="Dispute Bills" />
                    </div>
                    <div className="points col-xs-7" style={selectPadding}>
                        <span>Total Reward Points</span>
                    </div>
                    <div className="rewards col-xs-3" style={selectPadding}>
                        <span> 124 </span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewRow: () => dispatch(createNewRow()),
    }
}

export default connect(null, mapDispatchToProps)(SearchJobComponent);