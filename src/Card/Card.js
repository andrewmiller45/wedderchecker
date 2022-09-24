import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'


const Card = ({clouds, date, temp_hi, temp_lo, humidity, outlook, wind}) => {
    return (
            <div className="card">
                <h1>{date}</h1>
                <h2>{outlook}</h2>
                <div className="temp-box">
                    <p>Temp: {temp_hi}</p>
                </div>
                <p>Humidity: {humidity}%</p>
                <p>Wind: {wind} mph</p>
                <p>Cloud Cover: {clouds}%</p>
            </div>
    )
}


export default Card