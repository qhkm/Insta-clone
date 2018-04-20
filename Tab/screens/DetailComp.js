//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const DetailComp = (props) => {
    return (

        <View style={styles.container}>
            <Text>{props.item.name}</Text>
            <Text>{props.item.foodDescription}</Text>
            <Text>{props.item.price}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default DetailComp;
