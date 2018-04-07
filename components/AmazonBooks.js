//This was intended for amazon books

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component


const Amazon = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    );
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
export default Amazon;
