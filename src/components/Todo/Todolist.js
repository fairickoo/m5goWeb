
import React,{Component} from "react";
import Todoitem from "../Todo/Todoitem";
class Todolist extends Component{
   
    render(){
        let {items} = this.props
        return(
            <div className="todolist">
                <ul className="list">
                    {
                        items.map((todo,i)=>
                        <div className="showitem" key={i}><Todoitem className="todoitem"  text={todo}/> 
                       
                        </div>)
                        
                    }
                </ul> 
            </div>
           
        );
    }
}
export default Todolist;