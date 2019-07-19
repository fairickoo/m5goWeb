
import React,{Component} from "react";
class Todo extends Component{
    render(){
        return(
            <div className="todo">
                <label className="labelTOdo">Add Todo</label>
               <input/> 
               <button>Add</button>
            </div>
           
        );
    }
}
export default Todo;