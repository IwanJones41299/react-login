import React, {Component} from 'react';
import fire from '../config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <h3>Recipie Hunt</h3>
                <button className="btn btn-lg btn-logout" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;