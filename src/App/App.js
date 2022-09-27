import apiCalls from '../apiCalls';
import './App.css'
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Form from '../Form/Form';
import Weather from '../Weather/Weather'
import Gumby from '../Gumby/Gumby'

class App extends Component {
  constructor(){
    super()
    this.state = {
      location: 'seattle',
      weather: []
    } 
  }

  componentDidMount(){
    // this.apiCall()

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
        <main>
          <Nav/>
          <Switch>
            <Route exact path='/'>
              <Form props={this.state}/>
            </Route>

            <Route exact path='/gumby'>
              <Gumby/>
            </Route>
            <Route path='*'>
              <h3>Error 404: Sorry, that page that doesn't exist.</h3>
          </Route>
          </Switch>
        </main>
          )
      } 
  }

export default App

