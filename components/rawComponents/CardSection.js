import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={style.containerStyle}>
        {props.children}
        </View>
    );

};

const style = {
    containerStyle: {
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;