import React,{Component} from "react";
import Windows from "../Windows/Windows.js";
import Todo from "../Todo/Todo.js";
import Todolist from "../Todo/Todolist.js";
import Todoheader from "../Todo/Todoheader.js";
import  "../App/App.css";
import Graph1 from "../Graph/Graph1";
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
      <Graph1/>
      <Todoheader/> 
      <Todo onAddTodo={this.addTodo}/>
      <Todolist items={todoitem}  />
      
    </div>);
  }
}


export default App;
