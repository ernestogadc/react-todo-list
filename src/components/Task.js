import { FaRegTimesCircle } from 'react-icons/fa';
const Task = ({ todo, onToggle, onDelete }) => {
    return (
        <div className={todo.done ? 'task-done' : 'task'}>
            <h2>{todo.todo}</h2>
            <div className='btns'>
                <input
                    type='checkbox'
                    checked={todo.done}
                    value={todo.done}
                    onChange={() => onToggle(todo.id)} />
                <FaRegTimesCircle
                    className='cross'
                    onClick={todo.done ? () => onDelete(todo.id) : () => alert('Finish first')} />
            </div>
        </div>
    )
}

export default Task
