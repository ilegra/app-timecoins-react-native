import React, { Component } from 'react';
import StopWatchApp from './StopWatchApp';
import { Card, CardSection, Input, Button } from './common';


class MeetingInfoForm extends Component {
  state = { salary: '', number: '', onFirstScreen: true };

  onButtonPress() {
    const { salary, number } = this.state;

  }

  getSalaryAndNumber() {
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

  render() {
    if (this.state.onFirstScreen) {
      return (
        this.getSalaryAndNumber
      );
    } else {
      return (
        <StopWatchApp salary={this.state.salary} number={this.state.number} />
      );
    }
  }
}

export default MeetingInfoForm;
