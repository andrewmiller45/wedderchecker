import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './Card.css'


const Card = ({clouds, date, temp_hi, temp_lo, humidity, outlook, wind}) => {
    return (
            <div className="card">
                <h1>{date}</h1>
                <h2>{outlook}</h2>
                <div className="temp-box">
                    <p>Temp: {(((temp_hi-273.15)*1.8)+32).toFixed(0)}º</p>
                </div>
                <p>Humidity: {humidity}%</p>
                <p>Wind: {wind} mph</p>
                <p>Cloud Cover: {clouds}%</p>
            </div>
    )
}

export default Card

Card.propTypes = {
    clouds: PropTypes.any,
    date: PropTypes.any,
    humidity: PropTypes.number,
    outlook: PropTypes.any,
    temp_hi: PropTypes.number,
    temp_lo: PropTypes.number,
    wind: PropTypes.any
  }