import * as React from 'react';
import PropTypes from 'prop-types';
import launch from '../assets/sample_json_data/launch.json';
import './Counter.sass';

function formatSec(secs) {
  let isTrue = (typeof secs === "number") && (secs >= 0);

  if (!isTrue) {
    throw new Error("Invalid format")
  }
  let result = undefined;
  let seconds = Math.floor(secs / 1000);

  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  let days = Math.floor(hours / 24);
  hours = hours % 24;
  let months = Math.floor(days / 28);
  days = days % 30;

  let monthStr = months < 10 ? `0${months}` : `${months}`;
  let dayStr = days < 10 ? `0${days}` : `${days}`;
  let hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  let minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  result = `${monthStr} months ${dayStr} days  ${hoursStr} hours ${minutesStr} minutes ${secondsStr} seconds`;
  //result = seconds;
  return result;
}


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: new Date(launch.launch_date_utc).getTime() - new Date().getTime(),
      to: 0
    };
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {


      if (this.state.from !== this.state.to){
        this.setState({
          from: this.state.from - 1000
        });
      } else {
        this.setState({
          from: this.state.to
        })
      }
    }, 1000);

  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  toggleTimer() {
    if (this.state.from !== this.state.to){
      this.setState({
        from: 0
      });
      this.intervalId;
    }
  }

  render(){
    // let date = new Date(launch.launch_date_utc);
    // console.log(date);
    // let secondsTime = date.getTime() / 1000;
    // console.log(secondsTime);

    return <p className="launch__info__counter"><span onClick={this.toggleTimer.bind(this)}>{formatSec(this.state.from)} </span> to start</p>;
  }


}

export default Counter;
