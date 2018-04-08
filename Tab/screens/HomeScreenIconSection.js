//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon, Button } from 'native-base'

// create a component
class HomeScreenIconSection extends Component {
    render() {
        return (
            <View style={styles.iconView}>
                <View style={styles.container}>
                    <Icon name="ios-menu"/>
                    <Icon name="ios-list-outline"/>
                    <Icon name="ios-people-outline"/>
                    <Icon name="ios-bookmark-outline"/>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    iconView: {
        flex: 1,
        backgroundColor: 'yellow',
        height:70
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 0,
        borderColor: 'grey'
    },
    
});

//make this component available to the app
export default HomeScreenIconSection;
