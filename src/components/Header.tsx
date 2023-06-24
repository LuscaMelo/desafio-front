import Image from 'next/image'
import logo from '../../public/images/logo.png'

export const Header = () => {
    return (
        <header className='bg-white w-full h-[15vh] lg:h-[127px] flex justify-center items-center'>
            <div className='relative h-[3.8vh] lg:h-[4.4vh] w-[100vw]'>
                <Image className='object-contain' fill src={logo} alt="Leadster logo" />
            </div>
        </header>
    )
}
