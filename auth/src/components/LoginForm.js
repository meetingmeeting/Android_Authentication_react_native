import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state ={ email: '', password: '', error: '', loading: false};

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                console.log('yay')
                .catch(() => {
                    this.setState({ error: 'Authentication Failed'});
                });
            });
    }

    renderButton(){
        if(this.state.loading) {
            return <Spinner sizeProps="small" />;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );

    }

    render(){
        return(
            <Card>
               <CardSection>
                   <Input
                   placeholder="example@gmail.com"
                   label = "Email"
                   value={this.state.email}
                   onChangeText={ text => this.setState({ email: text })} 
                   />
               </CardSection>
               <CardSection >
                   <Input
                   secureTextEntry
                   placeholder ="password"
                   label="Password"
                   value={this.state.password}
                   onChangeText={ text => this.setState({password: text})}
                   />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
               <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorTextStyle:{
        height:50,
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;