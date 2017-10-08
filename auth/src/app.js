import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  
    componentWillMount() {

        firebase.initializeApp({

            apiKey: "AIzaSyD5LprzQTVdAj0P7FYCx2ek0xuMJC7x7IQ",
            authDomain: "project-2382567055602623632.firebaseapp.com",
            databaseURL: "https://project-2382567055602623632.firebaseio.com",
            projectId: "project-2382567055602623632",
            storageBucket: "project-2382567055602623632.appspot.com",
            messagingSenderId: "265869443051"

          });
    }//mount
    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;