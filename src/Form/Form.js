import React, {Component} from "react";
import apiCalls from '../apiCalls';
import Weather from '../Weather/Weather';
import './Form.css'
import Gumby from '../Gumby/Gumby'
import areaBlurbs from '../areaBlurbs'


class Form extends Component {
    constructor(){
      super()
      this.state = {
        location: '',
        weather: []
      } 
    }

    handleChange = event => {
        this.setState({ location: event.target.value })
      }

    apiCall = () => {
        apiCalls.getData(this.state.location)
            .then(data => this.setState({weather: data.list}))
    }

    componentDidUpdate = (prevState) => {
        // console.log(this.state) 
        }

    render() {
        return (
            <section className="style-container">
                <div className="choose-area">
                    <select required id="zone" title="zone" onChange={event => {this.handleChange(event)}}>
                        <option>Choose the zone...</option>
                        <option value="leavenworth">Levy</option>
                        <option value="goldbar">Gold Bar</option>
                        <option value="lostledge">Lost Ledge</option>
                    </select>
                    <button type="submit" value="submit" onClick={() => {this.apiCall()}}>Click for a weather report!</button>
                </div>
                <div>
                    {!this.state.weather ? <h1>Cunnies so Bunny</h1> : <Weather weather={this.state.weather} location={this.state.location}/> }
                </div>
                
                <div className="area-details">
                    {!this.state.location ? <h1>"A boulderer's two favorite things are sugar momma's and easy top outs" -Basement Windows</h1> : areaBlurbs[this.state.location].blurb}
                </div>  
            </section>  
            )
        } 
    }

export default Form