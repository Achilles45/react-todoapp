import React from 'react'

export default function LoadingFallback() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                <h3 className="card-title">Loading State</h3>
                <p style={{opacity: ".8", lineHeight: "2.2"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste fuga ea aperiam voluptatem rerum quaerat in architecto porro at recusandae facilis molestias tempora illum culpa maiores nobis placeat doloribus. <br />
                    </p>
                </div>
            </div>
        </div>
    )
}
