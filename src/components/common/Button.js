import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.buttonPlayStyle}
          source={require('../../../assets/images/botao-play.png')}
        />
      </TouchableOpacity>
    );
};

const styles = {
  buttonPlayStyle: {
    width: 100,
    height: 100,
    marginTop: 5,
    marginLeft: 200
  }
};

export { Button };
