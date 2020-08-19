import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBnHm4VW5VoOaY0sKa4kEc947AELw1pbuQ",
    authDomain: "react-login-d1a15.firebaseapp.com",
    databaseURL: "https://react-login-d1a15.firebaseio.com",
    projectId: "react-login-d1a15",
    storageBucket: "react-login-d1a15.appspot.com",
    messagingSenderId: "382184508427",
    appId: "1:382184508427:web:20c788c55511dbc2700b0e",
    measurementId: "G-D4L97XCQ52"
};

const fire = firebase.initializeApp(config);

export default fire;