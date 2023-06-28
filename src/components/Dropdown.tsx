import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { motion } from 'framer-motion'

export const Dropdown = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col md:flex-row gap-2 items-center'>
            <span className='font-extrabold mr-1 text-md'>Ordernar por</span>
            <button className='relative flex items-center gap-1 py-2 px-4 rounded-lg border border-gray-800 font-semibold text-sm md:text-md text-gray-600' onClick={() => setOpen(!open)}>
                Data de Publicação
                {
                    open ? <AiFillCaretUp className='text-lg' /> : <AiFillCaretDown className='text-lg' />
                }
                {
                    open ? <motion.div
                        className='absolute bottom-[-157px] left-[-35%] lg:left-[-65%] lg:translate-x-0 rounded-xl w-[167%] bg-black z-50'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            damping: 10
                        }}
                    >
                        <ul className='flex flex-col items-start p-5 pl-6 gap-y-6'>
                            <motion.li
                                className='text-white'
                                whileHover={{ scale: 1.05 }}
                            >Data de Publicação
                            </motion.li>
                            <motion.li
                                className='text-white'
                                whileHover={{ scale: 1.05 }}
                            >Relevância
                            </motion.li>
                            <motion.li
                                className='text-white'
                                whileHover={{ scale: 1.05 }}
                            >Duração
                            </motion.li>
                        </ul>
                    </motion.div> : null
                }
            </button>
        </div>
    )
}
