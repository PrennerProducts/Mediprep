import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

const DefaultButton = (props) => {
  return (
    <View style={props.buttonStyle}>
        <TouchableOpacity onPress={props.pressHandler}>
            <Text style={props.textstyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default DefaultButton;
