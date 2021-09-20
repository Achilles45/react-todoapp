import React from 'react'

//Bring in the home page components
import Herosection from '../Layouts/Herosection';
import Todos from '../TodosComponents/Todos';
export default function Home() {
    return (
        <div>
            <Herosection />
            <Todos />
        </div>
    )
}
