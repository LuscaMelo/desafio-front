import React from 'react'

export const Pagination = () => {
    return (
        <div className='flex gap-2 items-center text-md lg:text-2xl'>
            <div>
                <p className='font-bold'>Página</p>
            </div>
            <div className='flex font-medium'>
                <button className=' justify-center items-center w-[40px] h-[40px] rounded-lg'>1</button>
                <button className=' justify-center items-center w-[40px] h-[40px] rounded-lg'>2</button>
                <button className=' justify-center items-center w-[40px] h-[40px] rounded-lg text-primary font-bold border border-primary'>3</button>
                <button className=' justify-center items-center w-[40px] h-[40px] rounded-lg'>4</button>
            </div>
        </div>
    )
}
