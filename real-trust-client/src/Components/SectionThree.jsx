import React from 'react'

const SectionThree = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-14 p-[1rem]'>
                <div className='h-auto w-1/4 flex flex-col gap-2 items-center text-center'>
                    <div className='h-auto w-12 bg-gray-100 rounded-full'>
                        <img src="\src\assets\home.png" className='scale-50' alt="" />
                    </div>
                    <p className="text-blue-500">Potential Roi</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ea dolor possimus optio harum.</p>
                </div>
                <div className='h-auto w-1/4 flex flex-col gap-2 items-center text-center'>
                    <div className='h-auto w-12 bg-gray-100 rounded-full'>
                        <img src="\src\assets\paintbrush-2.png" className='scale-50' alt="" />
                    </div>
                    <p className="text-blue-500">Design</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ea dolor possimus optio harum.</p>
                </div>
                <div className='h-auto w-1/4 flex flex-col gap-2 items-center text-center'>
                    <div className='h-auto w-12 bg-gray-100 rounded-full'>
                        <img src="\src\assets\circle-dollar-sign.png" className='scale-50' alt="" />
                    </div>
                    <p className="text-blue-500">Marketing</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ea dolor possimus optio harum.</p>
                </div>
            </div>
            <div>
                <img src="\src\assets\subtract-1.png" className='scale-50 absolute right-20' alt="" />
                <img src="\src\assets\Group 1.png" className='scale-50 absolute right-0 my-[2rem]' alt="" />
            </div>
        </>
    )
}

export default SectionThree