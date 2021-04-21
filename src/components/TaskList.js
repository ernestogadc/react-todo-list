import TaskTodo from './Task';

const TaskList = ({ todos, onToggle, onDelete }) => {
    return (
        <div>
            {todos.length > 0 ? todos.map(todo => (
                <TaskTodo
                    key={todo.id}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    todo={todo} />
            )) : (<h2 style={{ textAlign: 'center' }}>No more tasks for today</h2>)}
        </div>
    )
}

export default TaskList
