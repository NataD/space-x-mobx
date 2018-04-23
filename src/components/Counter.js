import * as React from 'react';
import PropTypes from 'prop-types';


function formatSec(secs) {
  let isTrue = (typeof secs === "number") && (secs >= 0);

  if (!isTrue) {
    throw new Error("Invalid format")
  }
  let result = undefined;
  let minutes = Math.floor(secs/60);
  let seconds = Math.floor(secs % 60);
  let minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  result = `${minutesStr} : ${secondsStr}`;

  return result;
}


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 0,
      to: 30
    };
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {


      if (this.state.from !== this.state.to){
      this.setState({
        from: this.state.from + 1
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
    return <h1 style={{textAlign: 'center', marginTop: '50px'}}>Minęło <span onClick={this.toggleTimer.bind(this)}>{formatSec(this.state.from)} </span>sekund z {this.state.to}.</h1>;
  }


}

export default Counter;
