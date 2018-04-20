import React, { Component } from 'react';
import {  FlatList, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, Image} from 'react-native';
import {Icon, Button, CardItem} from 'native-base';
import { List } from 'react-native-elements';
import SwiperIntro from '../components/SwiperIntro';
import HomeScreenIconSection from './screens/HomeScreenIconSection';
import Recommendation from '../components/Recommendation';
import flatListData from '../data/flatListData';



export default class BookingTab extends Component {


  onLearnMore = (item) => {
    this.props.navigation.navigate('Detail', { ...item });
  };
  
  _renderItems = ({item, index})=> {
    return (   
      <TouchableOpacity onPress={() => this.onLearnMore(item)}>
        <View key={index}>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            borderColor: '#ddd',
            borderBottomWidth: 0.5           
      }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white'            
          }}>      
              <Image source={{uri: item.imageUrl}} style={{width:100, height:100, margin: 5}}></Image>
              <View style={{flex:1, flexDirection:'column'}}>
                <Text style={styles.flatListItemTitle}>{item.name}</Text>
                <Text numberOfLines={2} style={styles.flatListItemDesc}>{item.foodDescription}</Text>
                <Text style={styles.flatListItemPrice}>{item.price}</Text>
              </View>  
            </View>
          </View>  
        </View>
      </TouchableOpacity>
    );
}

  render() {
    return (
      <ScrollView>
          <SwiperIntro/>
            <View>
            <HomeScreenIconSection/>
            </View>
            <Recommendation/>

            <View style={{flex: 1}}>
            
            <FlatList 
                data={flatListData}
                renderItem={this._renderItems}
                keyExtractor={item => item.key}> 
            </FlatList>
            
            </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  flatListItemTitle: {
      color: 'black',
      padding: 10,
      fontSize: 13, 
      fontWeight: 'bold' 
  },
  flatListItemDesc: {
      color: 'black',
      padding: 10,
      fontSize: 12, 
  },
  flatListItemPrice: {
      color: 'red',
      padding: 10,
      fontSize: 14, 
  }

});
