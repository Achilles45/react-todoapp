import React from 'react'
import { Link } from 'react-router-dom';

export default function Herosection() {
    return (
        <div className="card mt-5 mb-5">
            <div className="card-body">
            <p style={{opacity: ".8", lineHeight: "2.2"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste fuga ea aperiam voluptatem rerum quaerat in architecto porro at recusandae facilis molestias tempora illum culpa maiores nobis placeat doloribus. <br />
                <Link className="btn btn-primary" to="/all-todos" style={{marginTop: "1rem"}}>See All Todos</Link>
            </p>
            </div>
        </div>
    )
}
