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
                            <h3 className='text-3xl lg:text-[43px] lg:leading-[48px] max-w-[600px]'>Pronto para triplicar sua <strong>Geração de Leads?</strong></h3>
                            <p className='text-lg lg:text-2xl mt-2 lg:mt-4'>Criação e ativação em <strong>4 minutos.</strong></p>
                        </div>
                        <hr className='border border-gray-300' />
                        <div className='mt-5 flex gap-4'>
                            <button className='uppercase text-sm lg:text-[1.1rem] font-bold text-white lg:py-4 px-6 py-2 lg:px-8 bg-primary rounded-full'>Ver demonstração</button>
                            <Image className='w-[40%] lg:w-[205px] lg:h-[73px]' src={rdStation} alt='Selo RD-Station' />
                        </div>
                        <div className='flex flex-col lg:flex-row mt-4 font-semibold gap-4 lg:gap-0'>
                            <div className='flex items-center gap-1 lg:pr-2 lg:border-r-2 border-gray-400'>
                                <Image className='lg:w-[16px]' src={noCard} alt='Selo RD-Station' />
                                <p><strong>Não </strong>é necessário Cartão de Crédito</p>
                            </div>
                            <div className='flex items-center gap-1 lg:pl-2'>
                                <Image className='lg:w-[92px]' src={rating} alt='Selo RD-Station' />
                                <p><strong>4.9</strong>/5 média de satisfação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}