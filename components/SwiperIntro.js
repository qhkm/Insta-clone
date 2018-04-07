//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window')
// create a component
class SwiperIntro extends Component {
    render() {
        return (
            <View style={styles.wrapper} >
              <Swiper 
              showsButtons={false}
              horizontal={true}
              autoplay={true}
              >
                <View style={styles.slide1}>
                  <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    wrapper: {
        height: 160,
        width
    },
    slide1: {
      width,
      height: 160,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      width,
      height: 160,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE6',
    },
    slide3: {
      width,
      height: 160,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  });

//make this component available to the app
export default SwiperIntro;
