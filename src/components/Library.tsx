"use client"

import { Filters } from "./Filters"
import { Pagination } from "./Pagination"
import { VideoCard } from "./VideoCard"

export const Library = () => {

    return (
        <div className='flex flex-col max-w-[1150px] py-14 lg:py-24 mx-auto px-4'>
            <div>
                <Filters />
            </div>
            <div className="flex justify-center px-6 lg:px-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 border-b-2 border-t-2 border-gray-300 pt-16 pb-20">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Pagination />
            </div>
        </div>
    )
}
