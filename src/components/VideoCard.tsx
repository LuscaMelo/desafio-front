import Image from 'next/image'
import React, { useState } from 'react'
import thumbnail from '../../public/images/thumbnail.png'

import { HiMiniPlay } from 'react-icons/hi2'

export const VideoCard = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="flex flex-col max-w-[362px] bg-white shadow-2xl shadow-gray-300 rounded-3xl overflow-hidden cursor-pointer hover:text-primary"
            onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
        >
            <div className='relative'>
                <Image width={362} height={204} src={thumbnail} alt='' />
                {
                    show ? <div className=''>
                        <div className="absolute flex items-center justify-center top-0 w-full h-full bg-blue-500 opacity-30"></div>
                        <HiMiniPlay className='absolute top-[30%] left-[35%] text-8xl text-white' />
                    </div> : null
                }
            </div>
            <div className='py-5 px-8'>
                <h4 className='font-extrabold lg:text-lg leading-[22px] hover:text-primary'>Como aumentar sua Gestão de Leads feat. Traktor</h4>
            </div>
        </div>
    )
}
