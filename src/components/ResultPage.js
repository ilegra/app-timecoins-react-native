import React, { Component } from 'react';
import { Text } from 'react-native';
import Expo from 'expo';
import { Card, Button } from './common';

const timeToSec = (time) => {
  const [
    hour,
    min,
    sec,
  ] = time.split(':');

  return ((+hour) * 60 * 60) + ((+min) * 60) + (+sec);
};

class ResultPage extends Component {

  componentWillMount() {
    this.analytics();
  }

  analytics() {
    Expo.Segment.track('ResultPage');
  }

   render() {
     return (
       <Card>
        <Text>
          Total meeting time was:
          {this.props.currentTime}
        </Text>

        <Text>
          The meeting cost to your company:
          {
            Math.round(timeToSec(this.props.currentTime)
            * ((this.props.quantity
            * this.props.amount) / 9600) * 100) / 100
          }
        </Text>

        <Button onPress={this.props.onReset}>
          {require('../../assets/images/botao-recomeçar.png')}
        </Button>
       </Card>
     );
   }
}

export default ResultPage;
