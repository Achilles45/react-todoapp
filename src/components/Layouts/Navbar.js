import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <div className="container">
                <Link className="navbar-brand" to="/">Todo Manager</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About Todo Manager<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Recent Todos </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/all-todos">All Todos</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/add-todo">Add New Todo</Link>
                    </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
