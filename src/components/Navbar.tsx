import Image from 'next/image'

export const Navbar = () => {
    return (
        <nav className='bg-white w-full h-[127px] flex justify-center items-center'>
            <Image width={200} height={200} src="/logo.png" alt="Leadster logo" />
        </nav>
    )
}
