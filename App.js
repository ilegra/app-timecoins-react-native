import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import Expo from 'expo';
import { Font } from 'expo';
import Header from './src/components/common/Header';
import MeetingInfoForm from './src/components/MeetingInfoForm';
import StopWatchApp from './src/components/StopWatchApp';
import ResultPage from './src/components/ResultPage';
import Banner from './src/components/Banner';

export default class App extends React.Component {
  state = {
    page: 'MeetingInfoForm',
    amount: 0,
    quantity: 0,
    currentTime: 0,
    fontLoaded: false
  }

  componentWillMount() {
    this.analytics();
  }

  async componentDidMount() {
   await Font.loadAsync({
     'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
     'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
     'Raleway-ExtraBold': require('./assets/fonts/Raleway-ExtraBold.ttf'),
   });

    this.setState({ fontLoaded: true });
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
        this.state.fontLoaded ? (
          <MeetingInfoForm
            onSubmit={
              this.state.fontLoaded ? (
                this.onSubmitMeetingForm
              ) : null
            }
          />
        ) : null
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
        <Header
          headerText={
            this.state.fontLoaded ? (
              <Text style={{ fontFamily: 'Raleway-Bold' }}>
                TIME INTO COINS
              </Text>
            ) : null
          }
        />
        <ScrollView>
          <Banner placementId="824806654350563_824807234350505" />
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
