import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD-43Hr28xVRDjYVlWf0QOcDAiG-DhmR9Y',
            authDomain: 'authentication-a03d0.firebaseapp.com',
            databaseURL: 'https://authentication-a03d0.firebaseio.com',
            projecttId: 'authentication-a03d0',
            storageBucket: 'authentication-a03d0.appspot.com',
            messagingSenderId: '573868405467'
          });
    }
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