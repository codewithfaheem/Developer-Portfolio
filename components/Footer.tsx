import React from 'react'
import MagicButton from './ui/buttons/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

function Footer() {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-50'/>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple-500'>Your</span> digital presence to the next level?</h1>
            <p className='text-white-200 text-center my-5 md:mt-10'>Reach out to me today and let&lsquo;s discuss how I can help you achieve your golas.</p>
            <a href='mailto:faheemawan876@gmail.com'>
                <MagicButton title='Let&lsquo;s get in toouch' icon={<FaLocationArrow />} position='right' />
            </a>
        </div>
        <div className='flex mt-16 flex-col md:flex-row justify-between items-center'>
            <p className='text-sm md:text-base font-normal md:font-light'>Copyright &copy; 2025 Faheem</p>
            <div className='flex items-center gap-6 md:gap-3 mt-5 md:mt-0'>
                {socialMedia.map((profile)=>(
                    <div key={'profile_'+profile.id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt="Faheem Social profile link" width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer