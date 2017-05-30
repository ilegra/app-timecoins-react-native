import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import Header from './src/components/common/Header';
import InputForm from './src/components/InputForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'TIME INTO COINS'} />
        <ScrollView>
          <View style={styles.containerLogoStyle}>
            <Image
              style={styles.logoImage}
              source={require('./assets/images/desenho-ampulheta.png')}
            />
          </View>
          <InputForm />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerLogoStyle: {
    alignItems: 'center',

  },
  logoImage: {
    width: 100,
    height: 250,
    marginTop: 5,
    marginBottom: 5
  }
};
