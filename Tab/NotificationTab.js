import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';


export default class NotificationTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-notifications-outline" style= {{color: tintColor}} />
    )
  }

  render() {
    return (
  
       <View>
       <Text>
       ayam
       </Text>
       </View>
      
    );
  }
}

