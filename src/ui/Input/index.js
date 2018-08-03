import React from 'react'
import './index.css'
import PropTypes from "prop-types";
import TopNav from "../../TopNav";



class Input extends React.Component{
    constructor(){
        super();
        const country = this.props
    }
    render(){
        return(
            <div className="country-input">
                <div className="small-label">From</div>
                <div className="main-label">
                    {country}
                </div>
            </div>
        );
    }
}

TopNav.propTypes= {
    country: PropTypes.toString(),
}

export default Input;