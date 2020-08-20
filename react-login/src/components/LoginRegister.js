import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../config/Fire';
import Image from '../images/logo.ico';

class LoginRegister extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Search for a recipie or the weather...',
            loginBtn: true
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAtion = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''})
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''})
        }
    }

    render(){

    let errorNotification = this.state.fireErrors ? (<div className="error">{this.state.fireErrors}</div>) : null;

    let submitBtn = this.state.loginBtn ? 
    (<button className="btn btn-lg btn-login btn-block loginBtn" type="submit" onClick={this.login}>Sign in</button>) :
    (<button className="btn btn-lg btn-signup btn-block loginBtn" type="submit" onClick={this.register}>Sign Up</button>);

    let login_register = this.state.loginBtn ? 
    (<button className="btn btn-lg btn-signup btn-block registerBtn" onClick={() => this.getAtion('reg')}>Sign Up</button>):
    (<button className="btn btn-lg btn-login btn-block loginBtn"onClick={() => this.getAtion('login')}>Sign in</button>);

    return(
      <div className="form_block">
        <div className="body text-center">
            <form className="form-signin">
                <img src={Image} className="logo" width="70" height="70" alt="logo"/>

                <h1 className="h3 mb-3 font-weight-normal">Recipie Hunt</h1>

                <div id="title">{this.state.formTitle}</div>

                <p className="error_message">{errorNotification}</p>

                <label Htmlfor="inputEmail" className="sr-only" />
                <input type="text"
                id="inputEmail"
                className="form-control" 
                required autoFocus
                value={this.state.email}
                onChange={this.handleChange}
                name="email" 
                placeholder="Email address..."/>

                <label Htmlfor="inputPassworx" className="sr-only" />
                <input type="password"
                id="inputPassword"
                className="form-control" 
                required
                value={this.state.password}
                onChange={this.handleChange}
                name="password" 
                placeholder="Password..."/>

                {submitBtn}

                {login_register}

            </form>
        </div>
      </div>
    );
  }

}

export default LoginRegister;
