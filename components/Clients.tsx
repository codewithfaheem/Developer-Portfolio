import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

function Clients() {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Kind words from <span className='text-purple-500'>staisfied clients</span>
        </h1>
        <div className='flex flex-col items-center mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
                {companies.map(({id, img, name, nameImg}) => {
                    return(
                        <div key={name+'_'+id} className="flex max-w-32 md:max-w-60 gap-2">
                            <img src={img} alt={name} className='w-5 md:w-10' /> 
                            <img src={nameImg} alt={name} className='w-20 md:w-24' /> 
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Clients