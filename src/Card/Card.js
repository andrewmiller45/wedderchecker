import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({clouds, date, temp_hi, temp_lo, humidity, outlook, wind}) => {
    return (
            <div className="card">
                {date}
                <h2>{outlook}</h2>
                <div className="temp-box">
                    <p>Hi Temp: {((1.8 *(temp_hi - 273) + 32).toFixed(0))}°</p>
                    <p>Low Temp: {((1.8 *(temp_lo - 273) + 32).toFixed(0))}°</p>
                </div>
                <p>Humidity: {humidity}%</p>
                <p>Wind: {wind}mph</p>
                <p>Cloud Cover: {clouds}%</p>
            </div>
    )
}


export default Card