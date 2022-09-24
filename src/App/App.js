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
      //   <Switch>
      //   <Route path='/search/:bird' render={({match})=> {
      //     return <Checklist bird={match.params.bird} birds={this.state.sightings}/>}}/>
      //   <Route exact path='/sightings'>
      //     <Form searchBirds={this.searchBirds}/>
      //     <Sightings birds={this.state.sightings} search={this.state.searchQuery}/>
      //   </Route>
      //   <Route exact path='/contributors'>
      //     <Contributors contributors={this.state.contributors}/>
      //   </Route>
      //   <Route exact path='/checklist'>
      //     <Checklist />
      //   </Route>
      //   <Route exact path='/'>
      //     <h2>Welcome to Bird Adventures</h2>
      //     <p>Here you can find bird sightings in Colorado for the most recent 14 day period.</p>
      //   </Route>
      //   <Route path='*'>
      //       <h3>Error 404: Sorry, that page that doesn't exist.</h3>
      //   </Route>
      // </Switch>
      <main>
        <Nav/>
        <Switch>
          <Route exact path='/'>
            <Form props={this.state}/>
          </Route>

          <Route exact path='/gumby'>
            <Gumby/>
          </Route>
        </Switch>
      </main>
          )
      } 
  }

export default App
