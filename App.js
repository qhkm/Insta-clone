
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import MainScreen from './MainScreen'



export default class App extends Component {

  render() {
    return (
      <AppStackNavigatorScreen/>
    );
  }
}

const AppStackNavigatorScreen = StackNavigator({
    Main : {
      screen : MainScreen
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
