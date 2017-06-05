import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';


class MeetingInfoForm extends Component {
  state = { salary: '', number: '' };

  onButtonPress() {
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              placeholder="Enter the average salary of participants"
              value={this.state.salary}
              onChangeText={salary => this.setState({ salary })}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="Enter the number of participants"
              value={this.state.number}
              onChangeText={number => this.setState({ number })}
            />
          </CardSection>

            <Button onPress={this.onButtonPress.bind(this)}>
              {require('../../assets/images/botao-play.png')}
            </Button>
        </Card>
    );
  }
}

export default MeetingInfoForm;
