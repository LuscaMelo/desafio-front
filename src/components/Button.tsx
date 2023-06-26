import React, { useEffect, useState } from 'react'

type iBtn = {
    content: string
    isActive: boolean
}

export const Button = ({ content, isActive }: iBtn) => {

    const [active, setActive] = useState('bg-primary text-white border-primary')

    return (
        <button
            className={`${isActive == true ? active : ''} py-1 px-5 xl:py-2 xl:px-6 rounded-full text-sm md:text-md border border-gray-800 font-semibold hover:border-primary duration-500`}
        >
            {content}
        </button>
    )
}
