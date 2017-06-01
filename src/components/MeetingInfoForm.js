import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class MeetingInfoForm extends Component {

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              placeholder="Enter the average salary of participants"
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="Enter the number of participants"
            />
          </CardSection>

            <Button>
              {require('../../assets/images/botao-play.png')}
            </Button>
        </Card>
    );
  }
}

export default MeetingInfoForm;
