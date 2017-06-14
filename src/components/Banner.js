import React from 'react';
import { View } from 'react-native';
import { FacebookAds } from 'expo';

const Banner = ({ placementId, style }) => {
  return (
    <View style={style}>
      <FacebookAds.BannerView
        placementId={placementId}
        type="standard"
        onPress={() => console.log('click')}
        onError={(err) => console.log('error', err)}
      />
    </View>
  );
};

export default Banner;
