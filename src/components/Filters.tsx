import { useState } from 'react'
import { FilterButton } from './FilterButton'
import { Dropdown } from './Dropdown'

interface iButton {
    content: string
    isSelected: boolean
    id: number
}

const filterButtons: iButton[] = [
    { content: 'Agências', isSelected: false, id: 1 },
    { content: 'Chatbot', isSelected: false, id: 2 },
    { content: 'Marketing Digital', isSelected: true, id: 3 },
    { content: 'Geração de Leads', isSelected: false, id: 4 },
    { content: 'Mídia Paga', isSelected: false, id: 5 }
]


export const Filters = () => {

    const [selectedFilter, setSelectedFilter] = useState(filterButtons)

    return (
        <div className='flex flex-wrap justify-center items-center lg:justify-between mb-6 lg:mb-0'>
            <div className='flex justify-center flex-wrap gap-2'>
                {
                    selectedFilter.map(btn => (
                        <FilterButton
                            key={btn.id}
                            content={btn.content}
                            isSelected={btn.isSelected}
                            id={btn.id} />
                    ))
                }
            </div>

            <div className="mt-6 lg:mt-2 xl:mt-0">
                <Dropdown />
            </div>
        </div>
    )
}
