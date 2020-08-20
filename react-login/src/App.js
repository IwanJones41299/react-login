import React, { Component } from 'react';
import fire from './config/Fire';
import LoginRegister from './components/LoginRegister';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return(
      <div className="app">
        {this.state.user ? (<Dashboard />) : (<LoginRegister />)}
      </div>
    );
  }

}

export default App;
