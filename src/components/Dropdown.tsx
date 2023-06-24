import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const Dropdown = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col md:flex-row gap-2 items-center'>
            <span className='font-extrabold mr-1 text-sm'>Ordernar por</span>
            <button className='relative flex items-center gap-1 py-2 px-4 rounded-lg border border-gray-800 font-semibold text-sm md:text-md text-gray-600' onClick={() => setOpen(!open)}>
                Data de Publicação
                {
                    open ? <AiFillCaretUp className='text-lg' /> : <AiFillCaretDown className='text-lg' />
                }
                {
                    open ? <div className='absolute bottom-[-123px] right-[50%] lg:right-0 translate-x-[50%] lg:translate-x-0 rounded-xl w-[170%] bg-black text-white z-50'>
                        <ul className='flex flex-col items-start p-3 pl-5 gap-4'>
                            <li>Data de Publicação</li>
                            <li>Relevância</li>
                            <li>Duração</li>
                        </ul>
                    </div> : null
                }
            </button>
        </div>
    )
}
