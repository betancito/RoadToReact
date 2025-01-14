import { Filters } from "./Filters"
import { type filterValue } from "./Filters"
interface Props{
    activeCount: number
    completedCount: number
    onClearCompleted: () => void
    filterSelected: filterValue
    handleFilterChange: (filter: filterValue) => void
}

export const Footer: React.FC<Props> = ({
    onClearCompleted,
    filterSelected,
    handleFilterChange,
    completedCount = 0,
    activeCount = 0
}) => {

    const singleActiveCount = activeCount === 1
    const activeTodoWord = singleActiveCount ? 'task' : 'tasks'


    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> {activeTodoWord} Pending {!singleActiveCount}
            </span>
            <Filters
                filterSelected = {filterSelected}
                handleFilterChange = {handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Delete Completed
                    </button>
                )
            }
        </footer>
    )
}