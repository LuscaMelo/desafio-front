import Image from 'next/image'
import React from 'react'

import comparativo from '../../public/images/comparativo_img_CTA.png'
import rdStation from '../../public/images/selo_RD.png'
import noCard from '../../public/images/no-card-dark.webp'
import rating from '../../public/images/rating.webp'

export const Convert = () => {
    return (
        <div className='bg-secondary py-20 lg:py-0 lg:pt-10 px-7'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='w-full flex flex-col md:gap-8 lg:gap-0 md:flex-row items-center justify-center px-5'>
                    <div className='w-full'>
                        <Image className='w-full lg:w-[739px]' src={comparativo} alt='Comparativo' />
                    </div>
                    <div className='w-full lg:pl-28 font-medium overflow-hidden'>
                        <div className='mb-4'>
                            <h3 className='text-[24px] leading-8 lg:text-[43px] lg:leading-[48px] max-w-[600px] mt-5 md:mt-0'>Pronto para triplicar sua <strong>Geração de Leads?</strong></h3>
                            <p className='text-[16px] lg:text-2xl mt-2 lg:mt-4'>Criação e ativação em <strong>4 minutos.</strong></p>
                        </div>
                        <hr className='border border-gray-300' />
                        <div className='mt-5 flex gap-2 2xl:gap-4'>
                            <button className='w-[50%] uppercase text-xs 2xl:text-[1.1rem] font-semibold text-white lg:py-4 px-6 py-2 lg:px-8 bg-primary rounded-full'>Ver demonstração</button>
                            <Image className='md:w-[40%] 2xl:w-[205px] lg:h-[73px]' src={rdStation} alt='Selo RD-Station' />
                        </div>
                        <div className='flex flex-col 2xl:flex-row mt-4 font-semibold gap-4 2xl:gap-0'>
                            <div className='flex items-center gap-1 2xl:pr-3 2xl:border-r-2 border-gray-400'>
                                <Image className='lg:w-[16px]' src={noCard} alt='Selo RD-Station' />
                                <p className='text-[15px] md:text-md'><strong>Não </strong>é necessário Cartão de Crédito</p>
                            </div>
                            <div className='flex items-center gap-1 2xl:pl-3'>
                                <Image className='lg:w-[92px]' src={rating} alt='Selo RD-Station' />
                                <p className='text-[14px] md:text-md'><strong>4.9</strong>/5 média de satisfação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
