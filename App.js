import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import Header  from './src/components/commons/Header';
import InputForm from './src/components/InputForm';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <Header headerText={'timeIntoCoins'} />
          <ScrollView>
            <Image
              style={styles.imageStyle}
              source={require('./assets/images/logo.png')}
            />
            <InputForm />
          </ScrollView>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    width: 300,
    height: 300,
    alignItems: 'center'
  },
};
