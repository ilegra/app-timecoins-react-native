import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import Header from './src/components/common/Header';
import InputForm from './src/components/InputForm';
import StopWatchApp from './src/components/StopWatchApp';

export default class App extends React.Component {
  state = { playStopWatch: null };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'TIME INTO COINS'} />
        <ScrollView>
          <Image
            style={styles.logoImage}
            source={require('./assets/images/desenho-ampulheta.png')}
          />
          <InputForm />
          <StopWatchApp />
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
