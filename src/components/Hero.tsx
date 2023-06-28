"use client"

import Image from 'next/image'
import heroImg from "/public/images/asset-header.png";
import { motion } from "framer-motion"

export const Hero = () => {

    //Animations
    const title = {
        hidden: { scale: 0, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 3.5,
                mass: 0.2,
                stiffness: 200
            }
        }
    }

    const image = {
        initial: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.7,
                delay: 1.5
            }
        }
    }

    return (
        <div className='bg-secondary h-[58vh] flex justify-center items-center'>
            <div className='text-center'>
                <span className='uppercase text-primary text-[11px] md:text-[14px] font-extrabold border-2 border-primary py-1.5 px-4 rounded-full rounded-es-none'>Webinars exclusivos</span>
                <div className='flex flex-col items-center'>
                    <h2 className='capitalize font-medium text-xl md:text-3xl lg:text-5xl mt-6'>Menos conversinha,</h2>
                    <motion.h1
                        className='relative capitalize font-bold linear-gradient text-4xl md:text-5xl lg:text-7xl xl:text-8xl pb-6'
                        variants={title}
                        initial='hidden'
                        animate='show'
                    >
                        Mais conversão
                        <motion.div
                            variants={image}
                            initial='initial'
                            animate='show'
                        >
                            <Image
                                src={heroImg}
                                alt="detail"
                                className="absolute top-0 right-[-10px] lg:right-[-15px] w-6 md:w-7 lg:w-10 xl:top-2 2xl:w-[48px]"
                            />
                        </motion.div>
                    </motion.h1>
                    <hr className='bg-gray-300 h-[2px] w-[50vw] mx-auto' />

                </div>
                <p className='pt-4 font-medium text-sm md:text-lg mx-9'>Conheça as estratégias que <span className='font-extrabold'>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
            </div>
        </div>
    )
}
