import React, {Component} from "react";
import apiCalls from '../apiCalls';

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

    componentDidUpdate(prevState) {
        if(!prevState.location === this.state.location){
        apiCalls.getData(this.state.location)
            .then(data => this.setState({weather: data}))
            .then(console.log(this.state))
        }
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
                {/* <button type="submit" onSubmit={() => {this.getData()}}>Check it out</button> */}
            </div> 
            )
        } 
}   
export default Form