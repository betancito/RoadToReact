import { todoId, type listOfTodos } from "../types"
import { Todo } from "./Todo"
import { type todoToComplete } from "../types"

interface Props {
    todos : listOfTodos
    onToggleCompleteTodo: todoToComplete
    onRemoveTodo : ({id}: todoId) => void
}
export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) =>{
    return (
        <ul className="todo-list">
            {todos.map(todo =>(
                <li key={todo.id} 
                className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleteTodo = {onToggleCompleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
}