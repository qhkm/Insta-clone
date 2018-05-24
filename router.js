import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import HomeTab from './Tab/HomeTab';
import BookingTab from './Tab/BookingTab';
import NotificationTab from './Tab/NotificationTab';
import ProfileTab from './Tab/ProfileTab';
import Detail from './Tab/screens/Detail'
import Calendar from './Tab/screens/Calendar'
import Login from './Tab/screens/Login/Login'

export const AppStack = StackNavigator({
    BookingTab: {
        screen: BookingTab,
        navigationOptions: {
            header: null
        }
    },
    Detail : {
        screen: Detail,
        navigationOptions: {
            tabBarVisible : false
        },
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            tabBarVisible: false,
            title: 'Pick a Date'
        }
    }
})

export const AppTab = TabNavigator({

    Home: {
        screen: AppStack,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-home-outline" style= {{color: tintColor}} />
              )
        },   
    },

    Booking: {
        screen: HomeTab
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

export const AppEntry = SwitchNavigator({
    Login : {
        screen: Login,
        navigationOptions : {
            header: null
        }
    },

    AppTab : {
        screen : AppTab
    }
})

// Login : {
//         screen : Login,
//         navigationOptions : {
//             header : null
//         }
//     },
