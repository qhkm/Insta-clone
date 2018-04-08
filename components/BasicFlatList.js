import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {

    render() {     
        
        return (
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
              <TouchableHighlight>      
              <Image source={{uri: this.props.item.imageUrl}} style={{width:100, height:100, margin: 5}}></Image>
              </TouchableHighlight>
              <View style={{flex:1, flexDirection:'column'}}>
                <Text style={styles.flatListItemTitle}>{this.props.item.name}</Text>
                <Text style={styles.flatListItemDesc}>{this.props.item.foodDescription}</Text>
                <Text style={styles.flatListItemPrice}>{this.props.item.price}</Text>
              </View>  
            </View>
          </View>  
          
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



export default class BasicFlatList extends Component {

    render() {
      return (
        <View style={{flex: 1}}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                        
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>
                    );
                }}
                >
                
            </FlatList>
        </View>
      );
    }
}