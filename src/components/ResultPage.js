import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FacebookAds } from 'expo';
import { Card, Button } from './common';
import AdComponent from './AdComponent';

const adsManager = new FacebookAds.NativeAdsManager('824806654350563_824807234350505', 1);

class ResultPage extends Component {
   render() {
     return (
       <Card>

        <Text>Total meeting time was:</Text>


        <Text>The meeting cost to your company:</Text>


        <Button onPress={this.props.onReset}>
          {require('../../assets/images/botao-recomeçar.png')}
        </Button>

        <View>
          <AdComponent adsManager={adsManager} />
        </View>
       </Card>
     );
   }
}

export default ResultPage;
