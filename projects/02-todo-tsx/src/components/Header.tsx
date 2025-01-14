import { type todoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props{
    onAddTodo: ({title}: todoTitle) => void
}

export const Header: React.FC<Props> = ({onAddTodo}) => {
    return (
        <header className="header">
            <h1>
                Task.
                <img 
                    style={{width:'60px', height: 'auto'}}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/64px-Typescript.svg.png"
                />
            </h1>
            <CreateTodo saveTodo={onAddTodo}/>
        </header>
    )
}