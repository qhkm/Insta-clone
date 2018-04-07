//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Icon, Container, Content, Thumbnail} from 'native-base';

// create a component
class UserStories extends Component {
    render() {
        return (
            

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
        );
    }
}


//make this component available to the app
export default UserStories;
