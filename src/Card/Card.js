import React from 'react'
import { Link } from "react-router-dom";

const Card = ({id, wind}) => {
    console.log(wind)
    return (
            <div className="card">
                <h1>wind={wind}</h1>
            </div>
    )
}


export default Card