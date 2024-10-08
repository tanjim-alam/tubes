import React from 'react';
import Image from 'next/image';

function ImportantSection() {
    return (
        <div className='bg-white'>
            <div className='lg:w-[70%] w-[100%] m-auto relative'>
                <div className='flex justify-between items-center bg-primary pb-3 lg:px-10 px-2 pt-3 lg:rounded-full'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Image width={50} height={50} src={"https://www.ytviews.in/wp-content/uploads/2021/07/computer.svg"} />
                        <span className='text-white text-xs lg:text-sm font-medium text-center'>100% Safe</span>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Image width={50} height={50} src={"https://www.ytviews.in/wp-content/uploads/yt_views/affordable.png"} />
                        <span className='text-white text-xs lg:text-sm font-medium text-center'>Affordable Pricing</span>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Image width={50} height={50} src={"https://www.ytviews.in/wp-content/uploads/yt_views/mbg.png"} />
                        <span className='text-white text-xs lg:text-sm font-medium text-center'>Money Back Gaurantee</span>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Image width={50} height={50} src={"https://www.ytviews.in/wp-content/uploads/yt_views/fuullsupport.png"} />
                        <span className='text-white text-xs lg:text-sm font-medium text-center'>Complete Support</span>
                    </div>
                </div>
                <div className=' lg:absolute w-full'>
                    <div className='flex justify-center items-center'>
                        <p className='text-center shadow-[0_2px_2px_rgba(0,0,0,0.10)] bg-white lg:text-2xl text-xl font-semibold py-2 lg:px-8 px-4 rounded-3xl'>🚀 Platform trusted by more than 100000 plus creators globally</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportantSection;