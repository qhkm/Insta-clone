//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon, Body} from 'native-base'

// create a component
const ScreenHeader = () => {
    return (
        <Header>
             <Left><Icon name="ios-menu"></Icon></Left>
             <Body><Text>TravelApps</Text></Body>
             <Right><Icon name="ios-send-outline"></Icon></Right>
        </Header>
    );
};

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
export default ScreenHeader;
