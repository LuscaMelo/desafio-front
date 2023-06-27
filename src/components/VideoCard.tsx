import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import thumbnail from '../../public/images/thumbnail.png'
import { HiMiniPlay } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'
import { BsCloudDownload } from 'react-icons/bs'
import { motion, useAnimation, useInView } from 'framer-motion'
import { type } from 'os'

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
                open ?
                    <>
                        <div className="fixed top-0 left-0 flex justify-center items-center w-[100%] h-screen bg-overlay opacity-60 saturate-50 overflow-hidden z-50"></div>
                        <motion.div
                            className="fixed top-0 left-0 flex justify-center md:items-center mt-[6.5%] md:mt-0 w-[100%] h-screen overflow-hidden z-50 mb-20"
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 18
                                }
                            }}
                        >
                            <div className='relative w-[600px] bg-white flex flex-col rounded-2xl lg:overflow-hidden mx-6 h-[85%] overflow-auto border-t-[5px] border-primary'>
                                <IoMdClose className='absolute top-3 right-3 text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                                <div className='text-center flex justify-center items-center h-[18%]'>
                                    <h3 className='text-xl md:text-xl leading-7 font-semibold text-gray-900 mt-8 md:mt-8 lg:mt-10 max-w-[370px] mr-5 md:mr-0'><span className='text-primary'>Webinar:</span> {title}</h3>
                                </div>
                                <div className='h-[100%] w-full mt-8'>
                                    <iframe width="100%" height="100%" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                                <div className='p-7'>
                                    <div>
                                        <span className='font-bold text-lg'>Descrição</span>
                                        <p className='text-sm font-medium border-t border-gray-300 pt-2 mt-2 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorem excepturi hic unde provident doloribus temporibus labore minima veniam cum, explicabo, perspiciatis, similique quos rerum veritatis.</p>
                                    </div>
                                    <div className='mt-6'>
                                        <span className='font-bold text-lg'>Downloads</span>
                                    </div>
                                    <div className='flex flex-wrap gap-2 border-t border-gray-300 pt-3 mt-2'>
                                        <div className='flex items-center gap-2 bg-green-200 text-sm font-semibold rounded overflow-hidden'>
                                            <div className='bg-green-300 h-[29px] w-[29px] flex items-center justify-center'>
                                                <BsCloudDownload className='text-green-500' />
                                            </div>
                                            <span className='text-green-500 text-[13px] pr-3 pl-1'>Spreadsheet.xls</span>
                                        </div>
                                        <div className='flex items-center gap-2 bg-blue-200 text-sm font-semibold rounded overflow-hidden'>
                                            <div className='bg-blue-300 h-[29px] w-[29px] flex items-center justify-center'>
                                                <BsCloudDownload className='text-blue-500' />
                                            </div>
                                            <span className='text-blue-500 text-[13px] pr-3 pl-1'>Document.doc</span>
                                        </div>
                                        <div className='flex items-center gap-2 bg-yellow-100 text-sm font-semibold rounded overflow-hidden'>
                                            <div className='bg-yellow-200 h-[29px] w-[29px] flex items-center justify-center'>
                                                <BsCloudDownload className='text-yellow-600' />
                                            </div>
                                            <span className='text-yellow-600 text-[13px] pr-3 pl-1'>Presentation.ppt</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                    : null
            }

        </>
    )
}
