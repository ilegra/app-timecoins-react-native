import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Expo from 'expo';
import Header from './src/components/common/Header';
import MeetingInfoForm from './src/components/MeetingInfoForm';
import StopWatchApp from './src/components/StopWatchApp.js';
import ResultPage from './src/components/ResultPage';

export default class App extends React.Component {
  state = {
    page: 'MeetingInfoForm',
    amount: 0,
    quantity: 0,
    currentTime: 0,
  }

  componentWillMount() {
    this.analytics();
  }

  onSubmitMeetingForm = (values) => {
    this.setState({
      page: 'StopWatchApp',
      ...values,
    });
  };

  onSubmitStopWatchApp = ({ currentTime }) => {
    this.setState({
      page: 'ResultPage',
      currentTime,
    });
  };

  onSubmitResultPage = () => {
    this.setState({
      page: 'MeetingInfoForm'
    });
    Expo.Segment.track('botao-retornar');
  };

  analytics() {
    Expo.Segment.initializeIOS('7XJRKh7rQLa8Qx1qd6olaLg2XZ0PkKfH');
  }

  renderPage = () => {
    if (this.state.page === 'MeetingInfoForm') {
      return (
        <MeetingInfoForm onSubmit={this.onSubmitMeetingForm} />
      );
    } else if (this.state.page === 'StopWatchApp') {
      return (
        <StopWatchApp
          onStop={this.onSubmitStopWatchApp}
          amount={this.state.amount}
          quantity={this.state.quantity}
        />
      );
    } else if (this.state.page === 'ResultPage') {
      return (
        <ResultPage
          currentTime={this.state.currentTime}
          onReset={this.onSubmitResultPage}
          amount={this.state.amount}
          quantity={this.state.quantity}
        />
      );
    }
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'TIME INTO COINS'} />
        <ScrollView>
          <KeyboardAvoidingView
            behavior="padding"
          >
            { this.renderPage() }
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
