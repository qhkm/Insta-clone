import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {Icon, Container, Content, Thumbnail} from 'native-base';
import CardComponent from '../components/CardComponent'

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style= {{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{height:100}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 7}}>
              <Text style={{fontWeight:'bold'}}>Stories</Text>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Icon name="md-play" style={{fontSize:14 }}/>
                <Text style={{fontWeight:'bold'}}> Watch All</Text>
              </View>
            </View>
            <View style={{flex:3}}>
              <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle = {{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}>

                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>
                  <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>
                  <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>
                  <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>
                  <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>
                  <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>
                  <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink', borderWidth:2}}
                  source={require('../assets/me.jpeg')}/>

              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>

           <View style={{height:100}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 7}}>
              <Text style={{fontWeight:'bold'}}>Stories Lah sangat</Text>
            </View>

            <View style={{flex:1}}>
              <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle = {{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5,
                
                }}>

                <Image square
                  style={{marginHorizontal:5, width:100 ,height:200}}
                  source={require('../assets/budapest.jpg')}/>
                  <Image square
                  style={{marginHorizontal:5}}
                  source={require('../assets/me.jpeg')}/>
                  <Image square
                  style={{marginHorizontal:5}}
                  source={require('../assets/me.jpeg')}/>

              </ScrollView>
            </View>
          </View>
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

