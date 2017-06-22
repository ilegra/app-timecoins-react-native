import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        keyboardType={'numeric'}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#4D4D4D',
    paddingRight: 5,
    paddingLeft: 5,
    padding: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 1,
    fontFamily: 'Raleway-Light'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { Input };
