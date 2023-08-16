import React from 'react'
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <>
            <div className="landingDiv">
                <h1>Accordians Test <span className="diffTxt"> Edge CRM</span></h1>
                <Link to="/accordians" className="actionLink">
                    <button className="actionBtn">Test Page</button>
                </Link>
            </div>
        </>
    )
}

export default LandingPage
