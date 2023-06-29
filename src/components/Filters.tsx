import { useEffect, useState } from 'react'
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

    const [active, setActive] = useState(false)

    const handleChangeActive = (id: number) => {
        filterButtons.map(filter => {
            filter.id == id ? filter.isSelected = true : filter.isSelected = false
        })
        setActive(true)
    }

    useEffect(() => { setActive(false) }, [active])

    return (
        <div className='flex flex-wrap justify-center items-center lg:justify-between mb-6 lg:mb-0'>
            <div className='flex justify-center flex-wrap gap-2'>
                {
                    filterButtons.map(btn => (
                        <FilterButton
                            key={btn.id}
                            content={btn.content}
                            isSelected={btn.isSelected ? !active : active}
                            id={btn.id}
                            changeActive={handleChangeActive} />
                    ))
                }
            </div>

            <div className="mt-6 lg:mt-2 xl:mt-0">
                <Dropdown />
            </div>
        </div>
    )
}
