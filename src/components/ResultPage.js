import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button } from './common';

class ResultPage extends Component {
   render() {
     return (
       <Card>

        <Text>Total meeting time was:</Text>
        

        <Text>The meeting cost to your company:</Text>


        <Button onPress={this.props.onReset}>
          {require('../../assets/images/botao-recomeçar.png')}
        </Button>
       </Card>
     );
   }
}

export default ResultPage;
