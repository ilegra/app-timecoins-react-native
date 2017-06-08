import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from './common';

class ResultPage extends Component {
   render() {
     return (
       <Card>
        <View style={styles.container}>

            <Text style={styles.text}>Total meeting time was:</Text>
            <Text style={styles.text}>The meeting cost to your company:</Text>


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
    alignItems: 'center'

  },
  text: {
    fontSize: 17,
    color: '#4D4D4D',
    marginLeft: 7,
  }
};

export default ResultPage;
