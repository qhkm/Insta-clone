import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';

class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: "",
	  	password: ""
	  };
	}

	emailChangeHandler = (event) => {
		this.setState({
			email : event
		});
	}

	passwordChangeHandler = (event) => {
		this.setState({
			password: event
		});
	}

	submitHandler= () => {
      fetch('http://localhost:3000/api/v1/users/sign_up', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        email : this.state.email,
        password : this.state.password,


        })
      })
      .then((response) => response.text())
        .then((responseText) => {
          alert("SignIn Succesfull");
          this.props.item.navigate('AppTab')
        })
        .catch((error) => {
          console.log(error);
        });
    }


	render() {
    return (
      <View style={styles.container}>
      		<StatusBar barStyle="light-content"/>

			<TextInput 
			style={styles.input} 
			value={this.state.username}
			placeholder={"Username or email"}
			placeholderTextColor="rgba(255,255,255,0.7)"
			returnKeyType="next"
			onChangeText={this.emailChangeHandler}
			keyboardType="email-address"
			autoCapitalize="none"
			autoCorrect={false}
			onSubmitEditing={() => this.passwordInput.focus()}
			/>

			<TextInput 
			style={styles.input} 
			value={this.state.password}
			placeholder={"Password"}
			returnKeyType="go"
			onChangeText={this.passwordChangeHandler}
			placeholderTextColor="rgba(255,255,255,0.7)"
			secureTextEntry 
			ref={(input) => this.passwordInput = input}
			/>

			<TouchableOpacity style={styles.buttonContainer} onPress={() => this.submitHandler()}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
		container : {
			padding : 20
		},
		input : {
			height : 40,
			backgroundColor: 'rgba(255,255,255, 0.2)',
			marginBottom : 10,
			color: '#FFF',
			paddingHorizontal: 10
		},
		buttonContainer : {
			backgroundColor: '#2980b9',
			paddingVertical: 15
		},
		buttonText : {
			textAlign: 'center',
			color: '#FFFFFF',
			fontWeight: '700'
		}


});


export default LoginForm;	