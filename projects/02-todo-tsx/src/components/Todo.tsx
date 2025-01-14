import { todoCompleted, todoId, todoToComplete, type Todo as TodoType} from "../types"

interface Props extends TodoType{
    onRemoveTodo: ({id}: todoId) => void
    onToggleCompleteTodo: {id: todoId, completed: todoCompleted}
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) =>{
    return(
        <div className="view">
            <input 
                type="checkbox" 
                className="toggle"
                checked={completed}
                onChange={(event)=>{
                    onToggleCompleteTodo({id, completed: event.target.checked})
                }}
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={() => {
                    onRemoveTodo({id})
                }}
            />
        </div>
    )
}