import apiCalls from '../apiCalls';
import './App.css'
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Form from '../Form/Form';


class App extends Component {
  constructor(){
    super()
    this.state = {
      weather: [],
      location: ""
    } 
  }

  // componentDidUpdate(){
  //   apiCalls.getData()
  //     .then(data => this.setState({weather: data.list}))
  // }

  render(){ 
    return (
      <main className="App">
        <header>
          <Nav/>
        </header>
        <section>
          <Switch>
            <Form/>
            
          </Switch>
        </section>
      </main>
  )}
}

export default App;
