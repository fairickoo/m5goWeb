import React,{Component} from "react"
import "../Time/Time.css";
class Input extends React.Component {
  
    onSubmit(event) {
      event.preventDefault();
      const strSeconds = this.refs.seconds.value;
      if(strSeconds.match(/[0-9]/)) {
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(strSeconds, 10));
      }
    }
    
    render() {
      return (
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input className="addtime" type="text" ref="seconds" placeholder="Add Time"/>
          <input className="start"  type="submit" value="Start"></input>
        </form>
      )
    }
  }
  export default Input;