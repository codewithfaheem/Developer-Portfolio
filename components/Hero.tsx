import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textGenratorEffect'
import MagicButton from './ui/buttons/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <div className='pb-20 pt-36'>
        <div> {/* Spot ligtht */}
            <Spotlight className='-top-40 -left-32
                md:-top-23 md-left-32 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 -left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
        {/* Background grid */}
        <div className="absolute top-0 left-0 flex flex-col h-screen w-full items-center justify-center bg-white dark:bg-black-100 bg-grid-black/[0.2] dark:bg-grid-black/[0.3]">
            <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"/>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
        {/* Hero section text */}
        <div className='flex justify-center my-9 py-1 relative z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Welcome to my portfolio.</h2>
                <TextGenerateEffect
                    className='text-center text-[40px] md-text-5xl lg-text-6xl'
                    words="Transforming Concepts into Seamless User Experiences"
                />
                <p className='text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Faheem, a Front-end Developer based in United Kingdom. </p>
                <MagicButton
                    title="See my Work"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero