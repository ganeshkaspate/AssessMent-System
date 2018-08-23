import React from 'react';
import rexlogo from '../../images/rex.png';
import './RezoomexLogo.css';

const RezoomexLogo =  function() {
    return (
        <div id="rezoomexlogo" className="rex-logo-wrapper">            
            <img src={rexlogo} alt="rexlogo" className="img-responsive rex-logo"/>
        </div>
    )
}

export default RezoomexLogo;