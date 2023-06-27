"use client"

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/leadster.gif'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <footer className='w-full'>
            <div className='max-w-[1150px] py-14 mx-auto px-8'>
                <div className='flex flex-col items-center w-full pb-16'>
                    <div className='relative h-[42px] lg:h-[62px] w-[270px] mb-1'>
                        <Image className='object-contain' fill src={logo} alt="Leadster logo" />
                    </div>
                    <span className='text-light text-sm'>Transformando visitantes em clientes.</span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-16 w-full'>
                    <div className='flex flex-col gap-10'>
                        <h5 className='text-md lg:text-lg font-bold'>Links Principais</h5>
                        <ul className='flex flex-col gap-3 lg:gap-5'>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Ferramenta</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Preços</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h5 className='text-md lg:text-lg font-bold'>Cases</h5>
                        <ul className='flex flex-col gap-3 lg:gap-5'>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Geração de B2B</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Geração de Leads em Software</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Geração de Leads em Imobiliária</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Cases de Sucesso</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h5 className='text-md lg:text-lg font-bold'>Materiais</h5>
                        <ul className='flex flex-col gap-3 lg:gap-5'>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Blog</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Parceria com Agências</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Guia Definitivo do Marketing</Link>
                            </li>
                            <li className='text-light font-sm lg:font-md font-light hover:text-primary hover:font-normal'>
                                <Link href='/'>Materiais Gratuitos</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h5 className='text-md lg:text-lg font-bold'>Siga a Leadster</h5>
                        <div className='flex items-center gap-3'>
                            <motion.div
                                className='flex items-center justify-center w-[45px] h-[45px] text-light hover:text-white bg-gray-100 hover:bg-[#00aff0] duration-500 rounded-full cursor-pointer'
                                whileHover={{ scale: 1.15 }}>
                                <a
                                    href="https://www.linkedin.com/company/leadster-platform/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJtsK8Un0hkLo-naG3wBKgtq9KDH2C64QjcIwv1LzZK1cZqB46-d3DUaAkQPEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJtsK8Un0hkLo-naG3wBKgtq9KDH2C64QjcIwv1LzZK1cZqB46-d3DUaAkQPEALw_wcB"
                                    target="_blank"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </motion.div>
                            <motion.div
                                className='flex items-center justify-center w-[45px] h-[45px] text-light hover:text-white bg-gray-100 hover:bg-[#00aff0] duration-500 rounded-full cursor-pointer'
                                whileHover={{ scale: 1.15 }}
                            >
                                <a
                                    href="https://www.facebook.com/leadsterplatform?utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&utm_term=%7Bleadster%7D&utm_content=CJ_leadster&gad=1&gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJs9UBbxJ75Dt8MZNupRdKGuiyoA8iVvUWn1ylvA5nK02sT-AbqZU_UaAnm1EALw_wcB"
                                    target="_blank"
                                >
                                    <FaFacebookF />
                                </a>
                            </motion.div>
                            <motion.div
                                className='flex items-center justify-center w-[45px] h-[45px] text-light hover:text-white bg-gray-100 hover:bg-[#00aff0] duration-500 rounded-full cursor-pointer'
                                whileHover={{ scale: 1.15 }}
                            >
                                <a href="https://www.instagram.com/leadster.com.br/?utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&utm_term=%7Bleadster%7D&utm_content=CJ_leadster&gad=1&gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJs9UBbxJ75Dt8MZNupRdKGuiyoA8iVvUWn1ylvA5nK02sT-AbqZU_UaAnm1EALw_wcB"
                                    target='_blank'>
                                    <FaInstagram />
                                </a>
                            </motion.div>
                        </div>
                        <div className='hidden lg:block'>
                            <p className='text-black text-sm lg:text-md'>E-mail: <span className='text-light ml-1'>contato@leadster.com.br</span></p>
                            <p className='flex flex-col md:flex-row text-black text-sm lg:text-md mt-2'>Telefone: <span className='text-light ml-1'>(42) 98828-9851</span></p>
                        </div>
                    </div>
                    <div className='lg:hidden'>
                        <p className='text-black text-sm lg:text-md'>E-mail: <span className='text-light ml-1'>contato@leadster.com.br</span></p>
                        <p className='flex flex-col md:flex-row text-black text-sm lg:text-md mt-2'>Telefone: <span className='text-light ml-1'>(42) 98828-9851</span></p>
                    </div>
                </div>
            </div>

            <div className='w-full border-t border-gray-100 py-10'>
                <div className='max-w-[1150px] mx-auto px-8'>
                    <div className="flex flex-col lg:flex-row text-center justify-between gap-5">
                        <div>
                            <p className='text-xs'>Copyright © 2015 - 2022 Todos os direitos reservados | <span className='text-primary'>Leadster</span></p>
                        </div>
                        <div>
                            <p className='text-xs text-light'>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
