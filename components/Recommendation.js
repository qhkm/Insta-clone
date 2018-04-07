//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// create a component
class Recommendation extends Component {
    render() {
        return (
            <View style={{height:100}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 7}}>
              <Text style={{fontWeight:'bold'}}>Stories Lah sangat</Text>
            </View>

            <View style={{flex:1, paddingBottom: 10}}>
              <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle = {{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5,
                
                }}>

                <Image square
                  style={{marginHorizontal:5, width:100 ,height:100}}
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
export default Recommendation;
