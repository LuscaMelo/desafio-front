import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import thumbnail from '../../public/images/thumbnail.png'
import { HiMiniPlay } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { BsCloudDownload } from 'react-icons/bs'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Modal } from './Modal'

interface iVideo {
    title: string
    url: string
}

export const VideoCard = ({ title, url }: iVideo) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView, mainControls])

    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)


    return (
        <>
            <motion.div
                ref={ref}
                className="flex flex-col max-w-[362px] bg-white shadow-2xl shadow-gray-300 rounded-3xl overflow-hidden cursor-pointer hover:text-primary"
                onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
                variants={{
                    hidden: { opacity: 0, y: 0.5 },
                    show: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.7, delay: 0.5
                }}
                onClick={() => setOpen(true)}
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
                    <h4 className='font-extrabold lg:text-lg leading-[22px] hover:text-primary'>{title}</h4>
                </div>
            </motion.div>

            {/* Modal */}
            {
                open ? <Modal setOpen={setOpen} url={url} title={title} /> : null
            }

        </>
    )
}
