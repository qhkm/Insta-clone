//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Button} from 'native-base'

// create a component
class PackageList extends Component {
    render() {
    
        return (
            <ScrollView>
                <Text>{name}</Text>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textStyle: {
        color: 'black'
    }
});

//make this component available to the app
export default PackageList;
