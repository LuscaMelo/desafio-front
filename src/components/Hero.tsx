import Image from 'next/image'
import React from 'react'
import heroImg from "/public/images/asset-header.png";

export const Hero = () => {
    return (
        <div className='bg-secondary h-[62vh] flex justify-center items-center'>
            <div className='text-center'>
                <span className='uppercase text-primary text-[11px] md:text-[14px] font-extrabold border-2 border-primary py-1.5 px-4 rounded-full rounded-es-none'>Webnars exclusivos</span>
                <div className='flex flex-col items-center'>
                    <h2 className='capitalize font-medium text-xl md:text-3xl lg:text-5xl mt-6'>Menos conversinha,</h2>
                    <h1 className='relative capitalize font-bold linear-gradient text-4xl md:text-5xl lg:text-7xl xl:text-8xl pb-6'>
                        Mais conversão
                        <Image
                            src={heroImg}
                            alt="detail"
                            className="absolute top-0 right-[-10px] lg:right-[-15px] w-6 md:w-7 lg:w-10 xl:top-2 2xl:w-[48px]"
                        />
                    </h1>
                    <hr className='bg-gray-300 h-[2px] w-[50vw] mx-auto' />

                </div>
                <p className='pt-4 font-medium text-sm md:text-lg mx-9'>Conheça as estratégias que <span className='font-extrabold'>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
            </div>
        </div>
    )
}
