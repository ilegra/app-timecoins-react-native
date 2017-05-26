import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './commons';

class InputForm extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="1000"
            label="avarage wage"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="5"
            label="attendees"
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
