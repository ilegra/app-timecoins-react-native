import React from 'react';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import InputForm from './src/components/InputForm';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <Header headerText={'TIME INTO COINS'} />
          <InputForm />
      </View>
    );
  }
}
