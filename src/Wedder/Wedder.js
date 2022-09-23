import React from "react"
import Form from '../Form/Form';
import './Wedder.css'


const Wedder = (wedder, location) => {
    return (
    <div>
        <h2>Gold Bar</h2>
        <div className="wedder-icon">
            <h3>9/24</h3>
            <div className="rain-box">
            <h4>Precip previous 48 hr:</h4>
            <h5>.08in</h5>
            </div>
            <p>50º</p>
            <p>Partly Cloudy</p>
        </div>

        <div className="wedder-icon">
            <h3>9/24</h3>
            <div className="rain-box">
            <h4>Precip previous 48 hr:</h4>
            <h5>.08in</h5>
            </div>
            <p>50º</p>
            <p>Partly Cloudy</p>
        </div>

        <div className="wedder-icon">   
            <h3>9/24</h3>
            <div className="rain-box">
            <h4>Precip previous 48 hr:</h4>
            <h5>.08in</h5>
            </div>
            <p>50º</p>
            <p>Partly Cloudy</p>
        </div>
    </div>  
    )
}

export default Wedder