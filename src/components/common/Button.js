import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
    return (
      <View style={styles.containerButton}>
        <Image
          style={styles.buttonStyle}
          source={require('../../../assets/images/botao-pause-inativo.png')}
        />

        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.buttonStyle}
            source={require('../../../assets/images/botao-play.png')}
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
    flexDirection: 'row'
  }
};

export { Button };
