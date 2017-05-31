import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

class StopWatchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };

    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  getFormattedTime(time) {
      this.currentTime = time;
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }

  toggleStopwatch() {
    this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  render() {
    return (
      <View>
        <View style={styles.containerIconStyle}>
          <Image
            style={styles.iconStyle}
            source={require('../../assets/images/relogio.png')}
          />
        </View>

        <Stopwatch
          laps secs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime}
        />

        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{ fontSize: 30 }}>{!this.state.stopwatchStart ? 'Start' : 'Stop'}</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>

        <View style={styles.containerIconStyle}>
          <Image
            style={styles.iconStyle}
            source={require('../../assets/images/moeda.png')}
          />
        </View>

        <Timer
          totalDuration={this.state.totalDuration}
          secs start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime}
        />

        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{ fontSize: 30 }}>
            {!this.state.timerStart ? 'Start' : 'Stop'}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
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
    alignItems: 'center'
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
