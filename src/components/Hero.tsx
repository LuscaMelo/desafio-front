import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <div className='bg-secondary h-[62vh] flex justify-center items-center'>
            <div className='text-center'>
                <span className='uppercase text-primary text-[14px] font-extrabold border-2 border-primary py-1.5 px-4 rounded-full rounded-es-none'>Webnars exclusivos</span>
                <div>
                    <h2 className='capitalize font-medium text-3xl lg:text-5xl mt-6'>Menos conversinha,</h2>
                    <h1 className='relative max-w-[800px] capitalize font-bold linear-gradient text-5xl lg:text-[88px] pt-3 pb-6'>Mais conversão
                        <Image className='absolute top-1 md:top-1 md:right-40 right-8 lg:top-4 lg:right-12' width={50} height={50} src="/asset-header.png" alt='' />
                    </h1>
                </div>
                <p className='pt-4 border-t border-gray-300 font-medium text-lg lg:px-9 mx-9'>Conheça as estratégias que <span className='font-extrabold'>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
            </div>
        </div>
    )
}
