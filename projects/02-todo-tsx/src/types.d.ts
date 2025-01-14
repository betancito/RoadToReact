export interface Todo {
    id:number
    title:string
    completed:boolean
}

export type todoId = Pick<Todo, 'id'>
export type todoTitle = Pick<Todo, 'title'>
export type todoCompleted = Pick<Todo, 'completed'> 
export type todoToComplete = Pick<Todo, 'id'|'completed'>

export type listOfTodos = Todo[]