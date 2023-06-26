import Image from 'next/image'
import React from 'react'

import comparativo from '../../public/images/comparativo_img_CTA.png'
import rdStation from '../../public/images/selo_RD.png'
import noCard from '../../public/images/no-card-dark.webp'
import rating from '../../public/images/rating.webp'

export const Convert = () => {
    return (
        <div className='bg-secondary py-20 lg:py-0 lg:pt-10 px-3'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='w-full flex flex-col md:gap-8 lg:gap-0 md:flex-row items-center justify-center px-5'>
                    <div className='w-[109%] lg:w-[100%] overflow-hidden'>
                        <Image src={comparativo} alt='Comparativo' />
                    </div>
                    <div className='w-full lg:pl-28 font-medium overflow-hidden mt-12 md:mt-0 pb-0 lg:pb-16 xl:pb-0'>
                        <div className='mb-4 text-center md:text-start'>
                            <h3 className='text-[27px] leading-8 lg:text-[43px] lg:leading-[48px] max-w-[600px]'>Pronto para triplicar sua <strong>Geração de Leads?</strong></h3>
                            <p className='text-[16px] lg:text-2xl mt-2 lg:mt-4'>Criação e ativação em <strong>4 minutos.</strong></p>
                        </div>
                        <hr className='border border-gray-300' />
                        <div className='justify-center lg:justify-start mt-5 flex flex-wrap md:flex-nowrap gap-y-5 gap-2 2xl:gap-4'>
                            <button className='w-[80%] lg:w-[45%] uppercase text-xs 2xl:text-[1.1rem] font-semibold text-white py-5 px-6 lg:px-8 bg-primary rounded-full hover:bg-white hover:text-primary hover:border hover:border-primary duration-500'>Ver demonstração</button>
                            <Image className='w-[50%] 2xl:w-[205px] lg:h-[73px]' src={rdStation} alt='Selo RD-Station' />
                        </div>
                        <div className='flex flex-col 2xl:flex-row mt-4 font-semibold gap-4 2xl:gap-0'>
                            <div className='flex items-center justify-center md:justify-start gap-1 2xl:pr-3 2xl:border-r-2 border-gray-400'>
                                <Image className='lg:w-[16px]' src={noCard} alt='Selo RD-Station' />
                                <p className='text-[15px] md:text-md'><strong>Não </strong>é necessário Cartão de Crédito</p>
                            </div>
                            <div className='flex items-center justify-center md:justify-start gap-1 2xl:pl-3'>
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
