"use client"

import { Button } from "./Button"
import { Dropdown } from "./Dropdown"

export const Library = () => {

    return (
        <div className='max-w-[1150px] py-24 mx-5 lg:mx-20 xl:mx-auto'>
            <div className='flex flex-wrap justify-between pb-6 border-b-2 border-gray-300'>
                <div className='flex  flex-wrap gap-3'>
                    <Button content="Agência" />
                    <Button content="Chatbot" />
                    <Button content="Marketing Digital" />
                    <Button content="Geração de Leads" />
                    <Button content="Mídia Paga" />
                </div>
                <div className="mt-5 lg:mt-2 xl:mt-0">
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}
