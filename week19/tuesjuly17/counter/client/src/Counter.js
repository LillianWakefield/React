import React, {Component} from 'react';
import axios from 'axios';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
counter: 0, 
        }
    }
componentDidMount(){
    axios.get('/counter')
    .then(({data})=>{
        this.setState(data);
    })
}
add(){
    axios.post('/counter/add')
    .then(({data})=>{
        this.setState(data);
    })
}
subtract() {
    axios.post('/counter/subtract')
    .then(({data})=>{
        this.setState(data);
    })
}
    render() {
        return (
            <div>
            <div>COUNTER: {this.state.counter}</div>
            <button onClick={this.add.bind(this)}>Add</button>
            <button onClick={this.subtract.bind(this)}>Subtract</button>
            </div>
        )
    }
}
export default Counter;