import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Expo from 'expo';
import { Card, CardSection, Input, Button } from './common';

class MeetingInfoForm extends Component {
  state = {
    amount: 0,
    quantity: 0,
  };

  componentWillMount() {
    this.analytics();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onPress = () => {
    this.props.onSubmit({
      amount: this.state.amount,
      quantity: this.state.quantity,
    });
    Expo.Segment.track('botao-play');
  };

  analytics() {
    Expo.Segment.track('MeetingInfoForm');
  }

  render() {
    return (
      <Card>
        <View style={{ flex: 1 }}>
          <View style={styles.containerLogoStyle}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/images/desenho-ampulheta.png')}
            />
          </View>

          <CardSection>
            <Input
              onChangeText={this.onChange.bind(this, 'amount')}
              placeholder="Enter the average salary of participants"
            />
          </CardSection>

          <CardSection>
            <Input
              onChangeText={this.onChange.bind(this, 'quantity')}
              placeholder="Enter the number of participants"
            />
          </CardSection>

          <Button onPress={this.onPress}>
            {require('../../assets/images/botao-play.png')}
          </Button>
        </View>
      </Card>
    );
  }
}

const styles = {
  containerLogoStyle: {
    alignItems: 'center'
  },
  logoImage: {
    width: 100,
    height: 250,
    marginTop: 15,
    marginBottom: 15
  }
};


export default MeetingInfoForm;
