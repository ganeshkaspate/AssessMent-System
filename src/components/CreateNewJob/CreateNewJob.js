import React from 'react';
import logo from '../../images/createJob.png';
import { removeRow } from '../../actions/GetUserJd';
import { connect } from 'react-redux';

class CreateNewJob extends React.Component {

    constructor(props) {
        super(props);
    }


    test(event) {
        this.props.removeRow();
    }


    render() {

        const imgHeight = {
            height: '20px'
        }

        const or = {
            padding: '10px'
        }

        const enabled = true;
        const color = {
            backgroundColor: '#C1BEC2',
            color: 'white'
        }

        const data = {
            color: '#FB4C2F',
            fontSize: '20px'
        }
        const row = {
            boxShadow: '0 0 15px 0 #0F9D8F'
        }

        return (
            <tr style={row}>
                <td><img src={logo} style={imgHeight} /></td>
                <td>
                    <select id="company" name="company" className="form-control">
                        <option disabled selected value>Select Company Name</option>
                        <option>Synerzip</option>
                        <option>Avalara Solutions</option>
                        <option>Tech Mahindra</option>
                        <option>Amdocs</option>
                        <option>Symantec</option>
                    </select>
                </td>
                <td>
                    <select id="Technology" name="Technology" className="form-control">
                        <option disabled selected value>Select Technology</option>
                        <option>Java</option>
                        <option>Angular Js</option>
                        <option>Javascript</option>
                        <option>Android</option>
                        <option>Mongo DB</option>
                    </select>
                </td>
                <td>
                    <button className='btn btn-default' style={color} disabled={enabled}>Add/Paste JD</button>
                    <span style={or} >or</span>
                    <button className='btn btn-default' style={color} disabled={enabled}>Upload JD File</button>
                </td>
                <td>
                </td>
                <td>
                    <i className="glyphicon glyphicon-remove-circle" onClick={(event) => this.test(event)} style={data} ></i>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeRow: () => dispatch(removeRow()),
    }
}

export default connect(null, mapDispatchToProps)(CreateNewJob);