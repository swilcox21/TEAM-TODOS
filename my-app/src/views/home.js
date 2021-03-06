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
    deleteTodo = (i) => {
        var newTodos = this.state.todos.filter((value, ind) => {
            return ind !== i;
            this.setState(newTodos)
    });
    }
    render() {
        return (
            <div className="container">
                <h1>ToDos</h1>
                <ul>
                    <li className>
                        <input type="text" onKeyUp={(e)=>this.addTodo(e)}></input>
                        <div  className="deleteX">x</div>
                    </li>
                    {this.state.todos.map((td, i)=>
                    <li className="todoList">
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
                        <div onClick={(e)=>this.state.deleteTodo()} className="deleteX">x</div>
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