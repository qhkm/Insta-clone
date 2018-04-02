import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

export default class CardComponent extends Component {
  render() {

    const images = {
        "1": require("../assets/1.jpg"),
        "2": require("../assets/budapest.jpg"),
        "3": require("../assets/1.jpg")

    }
    return (
      <Card>
        <CardItem>
            <Left>
                <Thumbnail source={require('../assets/me.jpeg')} />
                <Body>
                    <Text> Ayam</Text>
                    <Text note>Jan 5, 2018</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image source={images[this.props.imageSource]} style={{height: 200, width:null, flex:1}}/>
        </CardItem>

        <CardItem style={{height: 35}}>
            <Left>
                <Button transparent>
                    <Icon name={"ios-heart-outline"} style={{color: 'black'}}/>
                </Button>
                <Button transparent>
                     <Icon name={"ios-chatbubbles-outline"} style={{color: 'black'}}/>
                </Button>
                <Button transparent>
                    <Icon name={"ios-send-outline"} style={{color: 'black'}}/>
                </Button>      
            </Left>
        </CardItem>
        <CardItem style={{height: 34}}>
            <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>
                    <Text style={{fontWeight: "900"}}>Qaiyyum </Text> 
                    Anim id dolor deserunt quis commodo tempor occaecat minim. Sint ipsum ex elit ex id non consequat occaecat irure ea proident ex. Adipisicing in pariatur aliquip ea velit amet officia commodo anim veniam cupidatat tempor. Nulla pariatur excepteur reprehenderit ut adipisicing deserunt mollit velit reprehenderit dolore pariatur eu labore nisi. Minim consectetur ullamco eu elit eiusmod quis adipisicing velit dolore laboris labore non.
                </Text>
            </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
