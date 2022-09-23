import React from "react"
import Form from '../Form/Form';
import Card from '../Card/Card'
import './Wedder.css'


const Wedder = (wedder, location) => {
    const weatherCards = wedder.map(day => {
        return (
            <div key={day.dt}>
                <Card id={day.dt} wind={day.wind.speed} humidity={day.main.humidity} hiTemp={day.temp_max} loTemp={day.temp_min} weatherman={day.weather.description}/>
            </div>
        )
    })
    
    return (
        <div className="rainy-container">
            {weatherCards.length ? weatherCards : <h1>Choose a location!</h1>}
        </div>
    )
}

export default Wedder