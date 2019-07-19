
import React,{Component} from "react"

class Todoitem extends Component{
    render(){
        let {text}= this.props
        return(
            <div className="todoitem">
               {text}
            </div>
           
        );
    }
}
export default Todoitem;