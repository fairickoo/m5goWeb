import React,{Component} from "react";
import Windows from "../Windows/Windows.js";
import Todo from "../Todo/Todo.js";
import Todolist from "../Todo/Todolist.js";
class App extends Component{
  
  render(){
    return( 
    <div className="App">
      <Windows/>
      
      <Todolist/>
      <Todo/>
    
    </div>);
  }
}


export default App;
