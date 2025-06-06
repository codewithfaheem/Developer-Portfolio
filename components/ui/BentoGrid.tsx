'use client';
import { useState } from "react";
import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./gradientBG";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json"
import MagicButton from "./buttons/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-1 gap-4 lg:gap-8 mx-auto w-full py-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassname,
  titleClassName,
  spareImg

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassname?:string;
  titleClassName?:string;
  spareImg?:string
}) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('faheemawan876@gmail.com');
    setCopied(true);
  }

  return (
    <div className={cn(
       "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className,
      )}
      style={{
        backgroundColor: "rgb(4,7,29)",
        background:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id===6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && <Image src={img} alt="bg-img" width={100} height={100} className={cn(imgClassname, 'object-cover object-center')} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && <Image  src={spareImg} alt="spare-img" width={100} height={100} className='object-cover object-center w-full h-full'/>}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation />
        )}
        
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg-p10')}>
          <div className="font-sans font-extralight text-{#c1c2c3} text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-0 lg:-ight-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['Next.js', 'Typescript','ExpressJS'].map((item)=>(
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{item}</span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                {['MongoDB', 'AWS', 'TailwindCss'].map((item)=>(
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{item}</span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={{
                  loop:copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio: 'xMidYmid slice'
                  }
                }} />
              </div>
              <MagicButton 
                title={copied ? 'Email copied':'Copy my email'}
                icon={<IoCopyOutline/>}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}                
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
