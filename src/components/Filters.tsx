import { useState } from 'react'
import { Button } from './Button'
import { Dropdown } from './Dropdown'

const filterButtons = [
    { content: 'Agências', isActive: false },
    { content: 'Chatbot', isActive: false },
    { content: 'Marketing Digital', isActive: true },
    { content: 'Geração de Leads', isActive: false },
    { content: 'Mídia Paga', isActive: false }
]

export const Filters = () => {

    const [filters, setFilters] = useState(filterButtons)

    return (
        <div className='flex flex-wrap justify-center items-center lg:justify-between mb-6 lg:mb-0'>
            <div className='flex justify-center flex-wrap gap-2'>
                {
                    filters.map((btn, index) => (
                        <Button key={index} content={btn.content} isActive={btn.isActive} />
                    ))
                }
            </div>
            <div className="mt-6 lg:mt-2 xl:mt-0">
                <Dropdown />
            </div>
        </div>
    )
}
