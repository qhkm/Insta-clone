//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// create a component
class Recommendation extends Component {
    render() {
        return (
            <View style={styles.container}>

              <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 7, paddingVertical: 10}}>
                  <Text style={{fontWeight:'bold'}} onPress={() => this.props.navigation.navigate('PackageList')}>Trending Now</Text>
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
                  
                  <Image 
                  style={styles.packageStyle}
                  source={{ uri: 'https://dimg04.c-ctrip.com/images/300v0q000000gge9d42A0_C_500_280.jpg'}}/>
                  <Image 
                  style={styles.packageStyle}
                  source={{ uri: 'https://dimg04.c-ctrip.com/images/300v0q000000gge9d42A0_C_500_280.jpg'}}/>
                  <Image 
                  style={styles.packageStyle}
                  source={{ uri: 'https://dimg04.c-ctrip.com/images/300v0q000000gge9d42A0_C_500_280.jpg'}}/>
                  <Image 
                  style={styles.packageStyle}
                  source={{ uri: 'https://dimg04.c-ctrip.com/images/300v0q000000gge9d42A0_C_500_280.jpg'}}/>
                  <Image 
                  style={styles.packageStyle}
                  source={{ uri: 'https://dimg04.c-ctrip.com/images/300v0q000000gge9d42A0_C_500_280.jpg'}}/>
              </ScrollView>
              </View>

          </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
       
    },
    packageStyle : {
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginHorizontal:5,
        width:100,
        height:100,
        shadowColor: '#000',
        shadowOffset: { 
          width: 0, 
          height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 2
    }
});

//make this component available to the app
export default Recommendation;
