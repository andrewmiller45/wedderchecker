import apiCalls from '../apiCalls';
import './App.css'
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Form from '../Form/Form';
import Weather from '../Weather/Weather'

class App extends Component {
  constructor(){
    super()
    this.state = {
      
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
        <Form props={this.state}/>
          )
      } 
  }

export default App
