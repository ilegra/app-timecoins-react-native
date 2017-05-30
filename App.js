import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import Header from './src/components/common/Header';
import InputForm from './src/components/InputForm';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'TIME INTO COINS'} />
        <ScrollView>
          <Image
            style={styles.logoImage}
            source={require('./assets/images/desenho-ampulheta.png')}
          />
          <InputForm />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  logoImage: {
    width: 100,
    height: 250,
  }
};
