
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

import LoginForm from './LoginForm'

class Login extends Component {
  render() {

  	const { navigation } = this.props;

    return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>

       	<View style={styles.logoContainer}>
		  <Image style={styles.logo} source={require('../../../assets/twitterlogo.png')}/>
		  <Text style={styles.title}>This is a trial version</Text>
       	</View>

       	<View>
			<LoginForm item={navigation}/>
       	</View>
       	
       </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: '#3498db'
	},
	logoContainer: {
		alignItems : 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo : {
		width : 100,
		height: 100
	},
	title : {
		color : '#FFF',
		marginTop: 10,
		width : 140,
		textAlign : 'center'
	}
});


export default Login;