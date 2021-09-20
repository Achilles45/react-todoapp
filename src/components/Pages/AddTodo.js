import React, { Component } from 'react'

//Bring in context
import { Consumer } from '../Context/todoContext'

//Bring in randomstring package
import Randomstring from 'randomstring'

export default class AddTodo extends Component {

    //State
    state = {
        id: "",
        title: "",
        status: "",
        createdAt: "",
        loadingText: ""
    }

    //On state change methods 
    onChange = (e) =>
    this.setState({
        [e.target.name] :  e.target.value
    }) 

    //Function to submit a todo
    onSubmit = (todoDispatcher, e) =>{
        e.preventDefault();

        //Get values from the state
        const { title, description } = this.state;

        this.loadingText = "Processing new todo..."

        // let today = new Date();
        // let dd = today.getDate();
        // let mm = today.getMonth()+1; 
        // let yyyy = today.getFullYear();

        // let createdDate = `${dd}/${mm}/${yyyy}`

        //Now construct a new todo
        const newTodo = {
            id: Randomstring.generate(4),
            title,
            description,
            status: "Undone",
            // createdAt: createdDate
        }

        //Call our dispathcer
        todoDispatcher({
            type: "ADD_TODO",
            payload: newTodo
        })

        //Now redirect
        setTimeout(() => {
            this.props.history.push("/")
        }, 5000);
    }

    render() {
        const { title, description } = this.state;
        return (
            <Consumer>
                { value => {
                    const { todoDispatcher } = value
                    return (
                        <div>
                            <h4>Create New Todo Item</h4>
                            <p style={{ opacity: ".7", fontSize: ".9rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero a dolorum impedit qui culpa aliquam reprehenderit numquam maxime aspernatur.</p>
                            <hr /><br />
                            <div className="col-md-12">
                                <form onSubmit={this.onSubmit.bind(this, todoDispatcher)}>
                                    <div className="form-group">
                                        <label htmlFor="title">Title *</label>
                                        <input type="text"
                                        className="form-control"
                                        name="title"
                                        placeholder="Enter todo title"
                                        value={title}
                                        onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description *</label>
                                        <input type="text"
                                        name="description"
                                        className="form-control"
                                        placeholder="Enter todo description"
                                        value={description}
                                        onChange={this.onChange}
                                        />
                                    </div>
                                    { this.loadingText === null ? null : <p className="pt-2">{this.loadingText}</p> }
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary" value="Add Todo" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
