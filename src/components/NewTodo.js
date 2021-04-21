import React, { useState } from 'react';
const NewTodo = ({ onCreate }) => {
    const [todo, setTask] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!todo) {
            alert("Enter new task")
            return
        }
        const done = false
        const id = Math.floor(Math.random() * 10000) + 1

        onCreate({ todo, done, id })

        setTask('')
    }

    return (
        <form className='form-control' onSubmit={onSubmit}>
            <label>New task todo</label>
            <input
                type='text'
                value={todo}
                placeholder='New todo'
                onChange={(e) => setTask(e.target.value)} />
        </form>
    )
}

export default NewTodo
