
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AppTab } from './router';

export default class App extends Component {

  render() {
    return (
       <AppTab/>
    );
  }
}


