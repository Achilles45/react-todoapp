import React, { Component } from 'react'

//Bring in a single todo component to display a single component
import Todo from './Todo'

//Bring in our consumer
import { Consumer } from '../Context/todoContext'

import { Link } from 'react-router-dom'

export default class Todos extends Component {
    render() {
        return (
            <Consumer>
                { value => {
                    const { todos } = value;
                    return (
                        <div className="wrapper">
                            <table className="table table-hover mb-5">
                            <thead className="thead-light">
                                <tr>
                                <th scope="col">Unique ID</th>
                                <th scope="col">Todo Title</th>
                                <th scope="col">Todo Status</th>
                                <th scope="col">Todo Description</th>
                                <th scope="col">Action(s)</th>
                                </tr>
                        </thead>
                    <tbody>
                    { todos.length === 0 ? <div>
                        <p style={{ color: "red", paddingTop: "1rem"}}>There are currently no todos at the moment</p>
                        <Link to="/add-todo" className="btn btn-primary">Add Todo</Link>
                    </div> : null}
                    { todos.map(todo => (
                                <Todo 
                                key={ todo.id }
                                todo={ todo }
                                />
                            )) }
                            </tbody>
                        </table>
                    </div>
                    )
                } }
            </Consumer>
        )
    }
}
