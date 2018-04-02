import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base'

export default class NotificationTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-notifications-outline" style= {{color: tintColor}} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInNotification </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }

    });