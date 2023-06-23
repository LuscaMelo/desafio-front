"use client"

import { Button } from "./Button"
import { Dropdown } from "./Dropdown"
import { VideoCard } from "./VideoCard"

export const Library = () => {

    return (
        <div className='max-w-[1150px] py-24 mx-5 lg:mx-20 xl:mx-auto'>
            <div className='flex flex-wrap justify-between'>
                <div className='flex  flex-wrap gap-3'>
                    <Button content="Agências" />
                    <Button content="Chatbot" />
                    <Button content="Marketing Digital" />
                    <Button content="Geração de Leads" />
                    <Button content="Mídia Paga" />
                </div>
                <div className="mt-5 lg:mt-2 xl:mt-0">
                    <Dropdown />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 border-b-2 border-t-2 border-gray-300 pt-16 pb-20">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </div>
    )
}
