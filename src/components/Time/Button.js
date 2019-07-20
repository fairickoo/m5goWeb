import React,{Component} from "react"
class Button extends React.Component {
    render() {
      return (
          <button className="StopReset" onClick={this.props.onClickHandler}>{this.props.label}</button>    
      );
    }
  }
  export default Button;