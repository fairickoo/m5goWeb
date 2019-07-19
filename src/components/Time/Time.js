import React from 'react'

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsToCount: 30,
      beepNow: false
    }
    this.handleChangeSeconds = this.handleChangeSeconds.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  handleChangeSeconds(event) {
    this.setState({
      secondsToCount: parseInt(event.target.value)
    });
  }

  
  startTimer(event) {
    let endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + this.state.secondsToCount);
    this.end = endDate;
    this.setState({
      secondsUntilEnd: this.getSecondsLeft()
    })
    this.startTick()
  }

  startTick(event) {
    this.Reset()  // clear any existing timer
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    let secondsLeft = this.getSecondsLeft();
    let beep = false;
    if (secondsLeft >= 0 && secondsLeft <= 5) {
      beep = true;
    }
    if (secondsLeft <= 0) {
      this.stopTick();
    }
    this.setState({
      secondsUntilEnd: secondsLeft,
      beepNow: beep
    });
  }

  Stop() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false}
      );
    }
  }
  Reset(event) {
    clearInterval(this.timerID);
  }

  getSecondsLeft() {
    return Math.round((this.end - new Date()) / 1000)
  }

  componentWillUnmount() {
    this.stopTick();
  }

  render() {
    return (
      <div>
    
      <div>
        { this.state.secondsUntilEnd > 0 ? (
          <span>Seconds left: { this.state.secondsUntilEnd }</span>
        ) : (
          <span>Timer stopped.</span>
        ) }
        </div>
            <div>
          Seconds: <input value={this.state.secondsToCount} onChange={this.handleChangeSeconds} />
          <input type="button" value="Start" onClick={this.startTimer} />
          <input type="button" value="Stop" onClick={this.Stop} />
          <input type="button" value="reset" onClick={this.Reset} />
        </div>
        
      </div>
    )
  }
}

export default Time;