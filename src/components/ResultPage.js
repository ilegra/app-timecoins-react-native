import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
        <View style={styles.container}>

          <Text style={styles.text}>
            Total meeting time was:
          </Text>

          <View
           style={[styles.firstBackgroundColor, styles.containerResults]}
          >
            <Text style={styles.textTime}>
              {this.props.currentTime}
            </Text>
          </View>

          <Text style={styles.text}>
            The meeting cost to your company:
          </Text>

          <View
           style={[styles.secondBackgroundColor, styles.containerResults]}
          >
            <Text style={styles.textCost}>
              $
                {
                  Math.round(timeToSec(this.props.currentTime)
                  * ((this.props.quantity
                  * this.props.amount) / 576.000)) / 100
                }
            </Text>
          </View>

          <Button onPress={this.props.onReset}>
            {require('../../assets/images/botao-recomeçar.png')}
          </Button>
        </View>
       </Card>
     );
   }
}

const styles = {
  container: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 17,
    color: '#4D4D4D',
    marginBottom: 10,
    marginTop: 25
  },
  containerResults: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 40
  },
  firstBackgroundColor: {
    backgroundColor: '#FFC543'
  },
  secondBackgroundColor: {
    backgroundColor: '#6F3AAD'
  },
  textTime: {
    fontSize: 30,
    color: '#6F3AAD',
    marginTop: 20,
    marginBottom: 20
  },
  textCost: {
    fontSize: 30,
    color: '#FFC543',
    marginTop: 20,
    marginBottom: 20
  }
};

export default ResultPage;
