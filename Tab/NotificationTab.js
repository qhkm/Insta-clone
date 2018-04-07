import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';
import BasicFlatList from '../components/BasicFlatList';

export default class NotificationTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-notifications-outline" style= {{color: tintColor}} />
    )
  }

  render() {
    return (
  
        <BasicFlatList/>
      
    );
  }
}

