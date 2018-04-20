//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight,Image } from 'react-native';

// create a component
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


//make this component available to the app
export default FlatListItem;
