import { useState } from 'react'

interface iBtn {
    content: string
    isSelected: boolean
    id: number
}

export const FilterButton = ({ content, isSelected, id }: iBtn) => {

    const [btnActive, setBtnActive] = useState(isSelected)

    return (
        <>
            {
                btnActive ?
                    <button
                        key={id}
                        className="py-1 px-5 xl:py-2 xl:px-6 rounded-full text-sm md:text-md border border-primary bg-primary text-white font-semibold">
                        {content}
                    </button>
                    :
                    <button
                        key={id}
                        className="py-1 px-5 xl:py-2 xl:px-6 rounded-full text-sm md:text-md border border-gray-800 font-semibold hover:border-primary hover:text-primary duration-500">
                        {content}
                    </button>

            }
        </>
    )
}
