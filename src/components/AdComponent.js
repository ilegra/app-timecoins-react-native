import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FacebookAds } from 'expo';

class AdComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.nativeAd.description}</Text>
      </View>
    );
  }
}

export default FacebookAds.withNativeAd(AdComponent);
