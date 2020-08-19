import React, { Component } from 'react';
import fire from './config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
        {/* video is at 18:16, continue on from there */}
      </div>
    );
  }

}

export default App;
