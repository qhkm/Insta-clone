import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import HomeTab from './Tab/HomeTab';
import BookingTab from './Tab/BookingTab';
import NotificationTab from './Tab/NotificationTab';
import ProfileTab from './Tab/ProfileTab'

class MainScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return (
          <MainScreenTabNavigator/>
        );
    }
}

const MainScreenTabNavigator = TabNavigator({

    Home: {
        screen: HomeTab
    },

    Booking: {
        screen: BookingTab
    },
    
    Notification: {
        screen: NotificationTab
    }, 

    Profile: {
        screen: ProfileTab
    }

},{
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
        showIcon: true
    }
})

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});



