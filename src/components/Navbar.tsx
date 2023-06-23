import Image from 'next/image'

export const Navbar = () => {
    return (
        <nav className='bg-white w-full h-[90px] flex justify-center items-center'>
            <Image width={130} height={130} src="/logo.png" alt="Leadster logo" />
        </nav>
    )
}
