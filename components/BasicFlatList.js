import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {

    _onPressAdd () {
        alert('You pressed!!!');
    }

    render() {          
        return (
          <View style={{
            flex: 1,
            flexDirection: 'column',
            borderColor: '#ddd',
            borderBottomWidth: 1           
      }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white'            
          }}>  
              <TouchableHighlight onPress={this._onPressAdd}>      
              <Image source={{uri: this.props.item.imageUrl}} style={{width:100, height:100, margin: 5}}></Image>
              </TouchableHighlight>
              <View style={{flex:1, flexDirection:'column'}}>
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
              </View>  
            </View>
          </View>  
          
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'black',
        padding: 10,
        fontSize: 12,  
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