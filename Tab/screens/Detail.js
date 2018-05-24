//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Image, Dimensions, TouchableHighlight} from 'react-native';
import {Icon, View} from 'native-base';
import {Button} from 'react-native-elements'
import DetailComp from './DetailComp'

var {height, width} = Dimensions.get('window')
// create a component
class Detail extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: 'transparent',
            right: 0,
            left: 0,
            top: 0,
            position: 'absolute',
            borderBottomWidth: 0,
          },
        };
      }

      _onPressButton = (params) => {
       
          this.props.navigation.navigate('Calendar', {...params});

      }

      

      render() {

        const { params } = this.props.navigation.state;

        return (
            <ScrollView>
                <View>
                    <Image source={{ uri: params.imageUrl }} style={{width, height:200 }}/>
                    <DetailComp item={params}/>
                    <TouchableHighlight>
                        <Button raised title='Book Now' onPress={() => this._onPressButton(params)} buttonStyle={{backgroundColor: 'red'}} />
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Detail;
