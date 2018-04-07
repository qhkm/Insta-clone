//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';

// create a component
class TitleForUserStories extends Component {
    render() {
        return (
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 7}}>
              <Text style={{fontWeight:'bold'}}>Stories</Text>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Icon name="md-play" style={{fontSize:14 }}/>
                <Text style={{fontWeight:'bold'}}> Watch All</Text>
              </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TitleForUserStories;
