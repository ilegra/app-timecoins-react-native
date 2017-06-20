import React from 'react';
import { FacebookAds } from 'expo';
import { View } from 'react-native';
import Expo from 'expo';

const Banner = ({ placementId }) => {
  return (
    <View style={styles.styleBanner}>
      <FacebookAds.BannerView
        placementId={placementId}
        type="standard"
        onPress={() => console.log('click')}
        onError={(err) => Expo.Segment.track(err.message)}
      />
    </View>
  );
};

const styles = {
  styleBanner: {
    paddingBottom: 20
  }
};

export default Banner;
