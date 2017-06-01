import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Card } from './common';

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
        <Card>
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
    alignItems: 'center'
  },
  buttonStyle: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  containerButtonStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
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
