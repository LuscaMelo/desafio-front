interface iBtn {
    content: string
    isSelected: boolean
    id: number
    changeActive: Function
}

export const FilterButton = ({ content, isSelected, id, changeActive }: iBtn) => {

    return (
        <button
            onClick={() => changeActive(id)}
            key={id}
            className={`py-1 px-5 xl:py-2 xl:px-6 rounded-full text-sm md:text-md border font-semibold
            ${isSelected ? 'border-primary bg-primary text-white' : 'border-gray-700'}`}>
            {content}
        </button>
    )
}
