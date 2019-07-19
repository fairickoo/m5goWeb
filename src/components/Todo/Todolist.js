
import React,{Component} from "react";
import Todoitem from "../Todo/Todoitem";
class Todolist extends Component{
    render(){
        let {items} = this.props
        return(
            <div className="todolist">
                <ul>
                    {
                        items.map(todo=>
                        <li><Todoitem text={todo}/>
                        </li>)
                    }
                </ul> 
            </div>
           
        );
    }
}
export default Todolist;