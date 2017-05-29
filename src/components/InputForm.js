import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class InputForm extends Component {

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
              placeholder="Enter the average salary of participants"
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="Enter the number of participants"
            />
          </CardSection>

          <CardSection>
              <Button>
                start
              </Button>
          </CardSection>
        </Card>
    );
  }
}

export default InputForm;
