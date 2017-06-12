import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { Card } from './common';

const timeToSec = (time) => {
  const [
    hour,
    min,
    sec,
  ] = time.split(':');
  return ((+hour) * 60 * 60) + ((+min) * 60) + (+sec);
};

class StopWatchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: true,
      totalDuration: 0,
      timerReset: false,
      stopwatchReset: false,
      timePassed: '',
      currentTime: '00:00:00',
    };

    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  componentWillMount() {
    this.analytics();
  }

  getFormattedTime = (time) => {
    if (this.state.currentTime === time) return;
    this.setState({
      currentTime: time,
    });
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: false });
  }

  toggleStopwatch() {
    this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    Expo.Segment.track('botao-pause-play');
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: false });

    this.props.onStop({
      currentTime: this.state.currentTime,
    });
    Expo.Segment.track('botao-stop');
  }

  analytics() {
    Expo.Segment.track('StopWatchApp');
  }

  render() {
    return (
      <View>
        <Card>
          <View style={styles.containerIconStyle}>
            <Image
              style={styles.iconStyle}
              source={require('../../assets/images/relogio.png')}
            />
          </View>

          <Stopwatch
            start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={options}
            getTime={this.getFormattedTime}
          />

          <View style={styles.containerIconStyle}>
            <Image
              style={styles.iconStyle}
              source={require('../../assets/images/moeda.png')}
            />
          </View>

          <Text>
            {
              Math.round(timeToSec(this.state.currentTime)
              * ((this.props.quantity
              * this.props.amount) / 9600) * 100) / 100
            }
          </Text>

          <View style={styles.containerButtonStyle}>
            <TouchableOpacity onPress={this.toggleStopwatch}>
              {!this.state.stopwatchStart ?
                <Image
                  style={styles.buttonStyle}
                  source={require('../../assets/images/botao-play.png')}
                />
                :
                <Image
                  style={styles.buttonStyle}
                  source={require('../../assets/images/botao-pause-ativo.png')}
                />}
            </TouchableOpacity>

            <TouchableOpacity onPress={this.resetStopwatch}>
              <Image
                style={styles.buttonStyle}
                source={require('../../assets/images/botao-stop.png')}
              />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}

const handleTimerComplete = () => ('custom completion function');

const styles = {
  iconStyle: {
    width: 50,
    height: 50,
    marginTop: 20
  },
  containerIconStyle: {
    alignItems: 'center',
    marginTop: 25
  },
  buttonStyle: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  containerButtonStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 100,
    marginBottom: 5
  }
};

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center'

  },
  text: {
    fontSize: 30,
    color: '#6F3AAD',
    marginLeft: 7,
  }
};

export default StopWatchApp;
