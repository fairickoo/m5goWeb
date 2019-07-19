import React,{Component} from "react";
import Windows from "../Windows/Windows.js";
import Todo from "../Todo/Todo.js";
import Todolist from "../Todo/Todolist.js";
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      todoitem:[]
    }
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(newTodo){
    this.setState({todoitem:this.state.todoitem.concat([newTodo])})
  }
  render(){
    let {todoitem} = this.state
    return( 
    <div className="App">
      <Windows/>
      
      <Todolist items={todoitem}/>
      <Todo onAddTodo={this.addTodo}/>
    
    </div>);
  }
}


export default App;
