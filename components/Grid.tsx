import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

function Grid() {
  return (
    <section id='about'>
        <BentoGrid>
            {[{id:1, title:'Title1', description:'Dexc1'}].map( item => (
                <BentoGridItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    // header={item.header}
                    // icon={item.icon}
                    // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid