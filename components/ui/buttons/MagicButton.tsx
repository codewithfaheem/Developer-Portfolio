import React from 'react'

function MagicButton({title, icon, position, handleClick, otherClasses}
    :{title:string; icon:React.ReactNode; position:string; handleClick?: ()=>void; otherClasses?:string}) {
  return (
    <button onClick={handleClick} className="relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 py-5 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton