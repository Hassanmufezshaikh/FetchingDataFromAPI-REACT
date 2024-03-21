import React from 'react'
import {TodoType} from './types/Todo.types'

interface Props {
    todo: TodoType;
    handleCompleted: (id: number) => void;
    handleDelete: (id: number) => void;
}

const Todo:React.FC<Props> = ({todo, handleCompleted, handleDelete}) => {
    return (
    <div className="todo" style={{textDecoration: todo.completed ?  'line-through' : ''}}>
        {todo.title}
        <div>
            <button aria-label={`Mark ${todo.title} as ${todo.completed ? 'Incomplete' : 'Complete'}`} onClick={() => handleCompleted(todo.id)}>{todo.completed ? 'Incomplete': 'Complete'}</button>
            <button aria-label={`Delete ${todo.title}`} onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    </div>)
}

export default Todo