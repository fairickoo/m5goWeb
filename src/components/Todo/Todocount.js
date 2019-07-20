
import React,{Component} from "react"

class Todocount extends Component{
    constructor(props){
        super(props)
        this.state={
            count: this.props.value
        }
    }
    addArray = i =>{
        this.props.value=1
        this.setState({
            count: this.setState.count +1
        })
    }
   
}
export default Todocount;