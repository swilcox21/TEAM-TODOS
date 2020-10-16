import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }
    addTodo= (e)=>{
                    if (e.keyCode === 13){
                        this.setState({
                            todos: this.state.todos.concat(e.target.value)
                        })
                        e.target.value=""
                    }
                }
    render() {
        return (
            <div className="App">
                <h1>ToDos</h1>
                <ul>
                    <li>
                        <input type="text" onKeyUp={(e)=>this.addTodo(e)}></input>
                    </li>
                    {this.state.todos.map((td, i)=>
                    <li>
                        <input type="text" onChange={(e)=>{
                            this.setState({
                                todos: this.state.todos.map((t, ind)=> {
                                    if(ind === i){
                                        return e.target.value
                                    } else {
                                        return t
                                    }
                                })
                            })
                        }} value={td}></input>
                    </li>
                    )}
                </ul>
                <Link to="/testview">
				    <button className="myButton">to testview</button>
			    </Link>
            </div>
        );
}
}
export default Home;