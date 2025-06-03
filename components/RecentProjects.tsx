import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin/PinContainer'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '} <span className='text-purple-500'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={'projecet_'+id} className='h-[32rem] sm:h-[41rem] flex items-center justify-center w-[80vw] sm:w-[570px]'>
                    <PinContainer title={"Visit"} href={link}>
                        <div className='relative flex items-center justify-center w-[80vw] sm:w-[576px] h-[30vh] lg:h-[40vh] mb-10 overflow-hidden'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-lg bg-[#13162d]'>
                                <img src='/bg.png' alt="bg-img"/>
                            </div>
                            <img src={img} alt={title} className='x-10 absolute bottom-0' />
                        </div>
                        <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h2>
                        <p className='text-sm lg:text-xl lg:font-normal font-light line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, i)=>(
                                    <div key={icon} className='flex items-center justify-center border border-white/[0.2] rounded-full bg-black size-8 lg:size-10'
                                        style={{transform:`translateX(-${5*i*2}px)`}}
                                    >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='flex text-sm md:text-xs lg:text-xl text-purple-300'>Check Live Site</p>
                                <FaLocationArrow className='ms-3' color='#cbacf9' />
                            </div>
                        </div>

                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects