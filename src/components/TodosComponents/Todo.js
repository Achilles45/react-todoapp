import React, { Component } from 'react'

import { Consumer } from '../Context/todoContext';

export default class Todo extends Component {

    //Methods
    //First, method to delete a todo
    onDeleteClick = (id, todoDispatcher) =>{
        todoDispatcher ({
            type: "DELETE_TODO",
            payload: id
        })
    }

    //Method to mark or un mark todo
    markTodo = (id, todoDispatcher) =>{
        todoDispatcher({
            type: "CHECK_OR_UN_CHECKED",
            payload: id
        })
    }

    render() {
        const { id, title, status, description } = this.props.todo;
        return (
           <Consumer>
               { value => {
                   const { todoDispatcher } = value
                   return (
                    <tr>
                    <td>{ id }</td>
                    <td>{ title }</td>
                    <td style={{ color: status === "Done" ? "green" : "red" }}>{ status }</td>
                    <td>{ description }</td>
                    <td>
                    <button onClick={this.markTodo.bind(this, id, todoDispatcher)} type="button" className="btn btn-success mr-1"><i class="fas fa-check"></i></button>
                    <button type="button" className="btn btn-success mr-1"><i class="fas fa-edit"></i></button>
                    <button onClick={this.onDeleteClick.bind(this, id, todoDispatcher)} type="button" className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                    </td> 
                    </tr>
                   )
               } }
           </Consumer>
        )
    }
}
