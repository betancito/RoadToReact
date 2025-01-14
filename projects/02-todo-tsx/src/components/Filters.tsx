interface Props {
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
    handleFilterChange: (filter: filterValue) => void
}

export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const BUTTON_FILTERS = {
    [TODO_FILTERS.ALL]: {
        text: 'All',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        text: 'Active',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        text: 'Completed',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const

export type filterValue = 'all' | 'active' | 'completed'

export const Filters: React.FC<Props> = ({filterSelected, handleFilterChange}) => {

    const handleClick = (filter: filterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        handleFilterChange(filter)
    }

    return(
        <ul className="filters">
            {
                Object.entries(BUTTON_FILTERS).map(([key, {href, text}]) => {
                    const isSelected = key == filterSelected
                    const className = isSelected ? 'selected' : ''
                    return(
                        <li key={key}>
                            <a 
                            className={className}
                            href={href}
                            onClick={handleClick(key as filterValue)}
                            >
                                {text}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}