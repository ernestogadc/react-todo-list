import React, { useState } from 'react';
import NewTodo from './NewTodo';
const AddTodo = ({ onCreate }) => {
    const [open, setOpen] = useState(false);

    const newTodo = () => {
        setOpen(!open)
    }

    return (
        <div className='form'>
            <button onClick={newTodo} >Add new task</button>
            {open ? (<NewTodo onCreate={onCreate} />) : null}
        </div>
    )
}

export default AddTodo
