import React from 'react'
import { Button } from './Button'
import { Dropdown } from './Dropdown'

export const Filters = () => {
    return (
        <div className='flex flex-wrap justify-center lg:justify-between mb-6 lg:mb-0'>
            <div className='flex justify-center flex-wrap gap-2'>
                <Button content="Agências" />
                <Button content="Chatbot" />
                <Button content="Marketing Digital" />
                <Button content="Geração de Leads" />
                <Button content="Mídia Paga" />
            </div>
            <div className="mt-6 lg:mt-2 xl:mt-0">
                <Dropdown />
            </div>
        </div>
    )
}
