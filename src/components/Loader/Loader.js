import React from 'react';
import './Loader.css';
import loading from '../../images/weblist-loader.gif';

export default class Loading extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="loading">
                        <img id="loading-image" src={loading} alt="Loading..." />
                    </div>
                </div>
            </div>
        );
    }
}