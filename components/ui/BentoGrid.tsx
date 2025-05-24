import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradientBG";

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
  return (
    <div className={cn(
       "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        className,
      )}
      style={{
        backgroundColor: "rgb(4,7,29)",
        background:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id===6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img} className={cn(imgClassname, 'object-cover object-center')} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && <img src={spareImg} alt={spareImg} className='object-cover object-center w-full h-full' />}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg-p10')}>
          <div className="font-sans font-extralight text-{#c1c2c3} text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
