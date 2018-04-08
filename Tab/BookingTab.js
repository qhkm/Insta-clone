import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import {Icon, Button, CardItem} from 'native-base'
import SwiperIntro from '../components/SwiperIntro';
import BasicFlatList from '../components/BasicFlatList';
import HomeScreenIconSection from './screens/HomeScreenIconSection';
import Recommendation from '../components/Recommendation';




export default class BookingTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home-outline" style= {{color: tintColor}} />
    )
  }



  render() {
    return (
      <ScrollView>
          <SwiperIntro/>
            <View>
            <HomeScreenIconSection/>
          </View>
          <Recommendation/>
          <BasicFlatList/>
      </ScrollView>
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