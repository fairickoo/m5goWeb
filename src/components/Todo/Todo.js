
import React,{Component} from "react";
import  "../Todo/Todostyle.css";
class Todo extends Component{
    constructor(props){
        super(props)
        this.state ={
            newTodo:""
        }
        this.addClick = this.addClick.bind(this)
    }
    addClick(){
        let {onAddTodo} = this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo:""
        })
    }
    render(){
       let {newTodo}=this.state
        return(
            <div className="todo">
               <input maxlength="30" className="add" value={newTodo} onChange={(e)=>this.setState({newTodo:e.target.value})} placeholder="add a new todo..." /> 
               <button className="buttonadd" onClick={this.addClick}>Add</button>
              
            </div>
           
        );
    }
}
export default Todo;