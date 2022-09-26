import PropTypes from "prop-types"
import React from "react"
import Form from '../Form/Form';
import Card from '../Card/Card'
import './Weather.css'


const Weather = (props) => {
    const weatherCards = props.weather.map(day => {

        return (
            <div key={day.dt}>
                <Card 
                clouds={day.clouds.all}
                date={day.dt_txt}
                temp_hi={day.main.temp_max}
                temp_lo={day.main.temp_min}
                humidity={day.main.humidity}
                outlook={day.weather[0].description}
                wind={day.wind.speed}
                rain={day}
                />
            </div>
        )
    })
    
    return (
        <div className="rainy-container">
            {weatherCards.length ? weatherCards : <h1 id="waiting">Choose a bouldering zone to see the weather</h1>}
            
        </div>
    )
    }

export default Weather


Weather.propTypes = {
    weather: PropTypes.shape({
      map: PropTypes.func
    })
  }