import React, { Component } from 'react'

//Bring in react context
const TodoContext = React.createContext();

//Reducer Methods
const todoReducer = (state, action) =>{
    switch (action.type) {
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

            case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
    
        default: return state
    }
}

export class Provider extends Component {
    //State 
    state = {
        todos: [
            {
                id: "dsb3b84vdb8",
                title: "Learn Software Development",
                description: "Learn about software development to land a job",
                details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, aperiam quaerat cumque quis tenetur voluptatem, saepe aliquam rem voluptatibus consequatur animi mollitia iste vero sit illum veritatis cum excepturi provident nobis atque. Numquam veritatis laboriosam, id aut quibusdam soluta ullam mollitia corrupti omnis optio ab, ut dicta rem distinctio ipsum.",
                status: "Done"
            },
            {
                id: "dsb3b84vdc5",
                title: "Frontend Applications with react",
                description: "Learn to build modern frontend applications with React Js",
                details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, aperiam quaerat cumque quis tenetur voluptatem, saepe aliquam rem voluptatibus consequatur animi mollitia iste vero sit illum veritatis cum excepturi provident nobis atque. Numquam veritatis laboriosam, id aut quibusdam soluta ullam mollitia corrupti omnis optio ab, ut dicta rem distinctio ipsum.",
                status: "Undone"
            }
        ],

        //Dispatcher Methods
        todoDispatcher: (action => {
            this.setState(state => todoReducer(state, action))
        })
    }
    render() {
        return (
            <TodoContext.Provider value={this.state}>
                { this.props.children }
            </TodoContext.Provider>
        )
    }
}

export const Consumer = TodoContext.Consumer;