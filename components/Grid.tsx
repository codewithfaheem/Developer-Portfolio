import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    // header={header}
                    // icon={icon}
                    className={className}
                    img={img}
                    imgClassname={imgClassName}
                    titleClassName={titleClassName}
                    spareImg = {spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid