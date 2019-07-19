
import React,{Component} from "react";
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
       
        return(
            <div className="todo">
                <label className="labelTOdo">Add Todo</label>
               <input onChange={(e)=>this.setState({newTodo:e.target.value})} /> 
               <button onClick={this.addClick}>Add</button>
              
            </div>
           
        );
    }
}
export default Todo;