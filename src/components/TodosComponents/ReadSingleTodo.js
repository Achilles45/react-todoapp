import React, { Component } from 'react'

export default class ReadSingleTodo extends Component {
        render(){
            return (
                <div>
                    <h1>Id: {this.props.match.params.id} </h1><br /><br />
                </div>
            )
        }
}
