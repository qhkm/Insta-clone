import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {Icon, Container, Content, Thumbnail, Header, Left, Right, Body} from 'native-base';
import CardComponent from '../components/CardComponent';
import UserStories from '../components/UserStories';
import Recommendation from '../components/Recommendation';
import TitleForUserStories from '../components/TitleForUserStories';
import ScreenHeader from '../components/rawComponents/ScreenHeader';

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-briefcase-outline" style= {{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
       <ScreenHeader/>
        <Content>
          <View style={{height:100}}>
            <TitleForUserStories/>
            <UserStories/>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
          <Recommendation/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }

    });

