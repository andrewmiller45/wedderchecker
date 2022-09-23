import React, {Component} from "react";
import apiCalls from '../apiCalls';
import Wedder from '../Wedder/Wedder';
import './Form.css'

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
        console.log(this.state) 
        }

    render() {
        return (
            <div className="choose-area">
                <select required id="zone" title="zone" onChange={event => {this.handleChange(event)}}>
                    <option>Choose the zone...</option>
                    <option value="leavenworth">Levy</option>
                    <option value="goldbar">Gold Bar</option>
                    <option value="lostledge">Lost Ledge</option>
                </select>
                <button type="submit" value="submit" onClick={() => {this.apiCall()}}>Check it out</button>
                {this.state.location && this.state.weather ? <Wedder wedder={this.state.weather} location={this.state.location}/> : <h1>Choose a zone!</h1>}
            </div> 
            )
        } 
    }

export default Form