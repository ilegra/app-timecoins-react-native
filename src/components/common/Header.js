import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#6F3AAD',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#E6E6E6',
    fontSize: 20,
    paddingTop: 20
  }
};

export default Header;
