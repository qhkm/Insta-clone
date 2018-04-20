//import liraries
import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Calendar } from 'react-native-calendars';
import SimpleStepper  from 'react-native-simple-stepper'

// create a component
export default class CalendarsScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);
    }
  
    render() {
      return (
       <View style={{flex: 1}}>
       
        <ScrollView style={styles.container}>

          <Text style={styles.text}>Choose Available Dates</Text>
          <Calendar
            onDayPress={this.onDayPress}
            style={styles.calendar}
            hideExtraDays
            markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
          />
        </ScrollView>

        //Stepper
        <View style={{flex: 1,flexDirection:'row'}}>
          <View style={{flex: 1 ,alignItems: 'flex-start'}}>
            <Text>Adult</Text>
          </View>
          <View style={{flex: 1 ,alignItems: 'flex-end'}}>
            <SimpleStepper valueChanged={(value) => this.valueChanged(value)}/>
          </View>
        </View>

        <View style={{flex: 1,flexDirection:'row'}}>
          <View style={{flex: 1 ,alignItems: 'flex-start'}}>
            <Text>Adult</Text>
          </View>
          <View style={{flex: 1 ,alignItems: 'flex-end'}}>
            <SimpleStepper valueChanged={(value) => this.valueChanged(value)}/>
          </View>
        </View>

        

        <TouchableHighlight onPress={()=> alert('test')}>
          <View style={styles.buttonStyle}>
            <Text>PROCEED</Text>  
          </View>
        </TouchableHighlight>


        </View>
        
       

        
      );
    }

    valueChanged(value) {
      // If you want to set the value to a certain decimal point you can like so:
      const displayValue = value.toFixed(2)
      this.setState({
         displayValue: displayValue
      })
    }
  
    onDayPress(day) {
      this.setState({
        selected: day.dateString
      });
    }
  }
  
  const styles = StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    text: {
      textAlign: 'center',
      borderColor: '#bbb',
      padding: 10,
      backgroundColor: '#eee'
    },
    container: {
      flex: 1,
      backgroundColor: 'gray'
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        width: 400,
        height: 50,
        bottom: 0
        
    }
  });