import React, { Component } from 'react'

import Todos from '../TodosComponents/Todos'

export default class AllTodos extends Component {
    render() {
        return (
            <div className="wrapper">
                <h4>See All Todos</h4>
                    <p style={{ opacity: ".7", fontSize: ".9rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero a dolorum impedit qui culpa aliquam reprehenderit numquam maxime aspernatur.</p>
                    <hr /><br />
                <Todos />
            </div>
        )
             
    }
}
