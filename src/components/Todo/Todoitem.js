
import React,{Component} from "react"
import  "../Todo/Todostyle.css";
class Todoitem extends Component{
    constructor(props){
        super(props)
        this.state={
            done:false
        }
        this.toggle= this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            done: !this.state.done
        })
    }
    
    render(){
        let {text}= this.props
        
        return(
            <div className="todoitem">
                <input  type ="checkbox" 
                className ="Box"
                value={this.state.done}
                onClick={this.toggle}/>
                   
            {this.state.done ? <s>{text}</s>:text}
            <button className="buttonmove"  >-</button>
            </div>
           
        );
    }
}
export default Todoitem;