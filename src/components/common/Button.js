import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { containerButton, buttonStyle } = styles;

    return (
      <View style={containerButton}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={buttonStyle}
            source={children}
          />
        </TouchableOpacity>
      </View>
    );
};

const styles = {
  buttonStyle: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  containerButton: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 5
  }
};

export { Button };
