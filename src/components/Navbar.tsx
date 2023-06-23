import Image from 'next/image'

export const Navbar = () => {
    return (
        <nav className='bg-white w-full h-[15vh] lg:h-[127px] flex justify-center items-center'>
            <div className='relative h-[3.8vh] lg:h-[4.4vh] w-[100vw]'>
                <Image className='object-contain' fill src="/logo.png" alt="Leadster logo" />
            </div>
        </nav>
    )
}
