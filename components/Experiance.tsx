import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/buttons/MovingBorderButton'

function Experiance() {
  return (
     <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            My <span className='text-purple-500'>work experiance</span>
        </h1>
        <div className='w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10'>
            {workExperience.map((card,i) => (
                <Button key={'experiance_'+i} borderRadius='1.75rem' className='flex-1 text-white order-neutral-200 dark:order-slate-200'>
                    <div className='flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='w-16 md:w-20 lg:w-32' />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experiance