import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from './common';

class ResultPage extends Component {
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
                  00:00:00
                </Text>
              </View>

              <Text style={styles.text}>
                The meeting cost to your company:
              </Text>

              <View
                style={[styles.secondBackgroundColor, styles.containerResults]}
              >
                <Text style={styles.textCost}>
                  $387,78
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
    marginBottom: 25
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
