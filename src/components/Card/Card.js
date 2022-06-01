import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import "./Card.css"

const Card = (props) => {

const [expanded , setExpanded]= useState(false)

  return (
    <AnimateSharedLayout>
        {
            expanded?
                // <ExpandedCard/>
                'expended'
            :
            <CompactCard param = {props} />
        }
    </AnimateSharedLayout>
  )
}

// Compact Card 
function CompactCard ({param}) {
    const {Png} = param.png;
return(
    <div className="compact-card">
        <div className="radial-bar">
            chart
        </div>
        <div className="detail">
            <Png/>
            <span>${param.value}</span>
            <span>Last 24 hours</span>
        </div>
    </div>
)
}




export default Card