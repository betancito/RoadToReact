import { useState } from "react"
import { Todos } from "./components/Todos"
import { todoTitle, type todoToComplete } from "./types"
import {filterValue, TODO_FILTERS} from "./components/Filters"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


const mockTodos = [
  {
    id : 1,
    title : 'todo1',
    completed : false
  },
  {
    id : 2,
    title : 'todo2',
    completed : false
  },
  {
    id : 3,
    title : 'todo3',
    completed : false
  }
]

const App = () : JSX.Element => {
  // Temporary usestate to render todos
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<filterValue>(TODO_FILTERS.ALL)
  //const to handle remove
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    {id, completed}: todoToComplete
  ): void =>{
    const newTodos = todos.map(todo => {
      if (todo.id === id){
        return {...todo,  completed}
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: filterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void =>{
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected == TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected == TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: todoTitle): void =>{
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo = {handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
