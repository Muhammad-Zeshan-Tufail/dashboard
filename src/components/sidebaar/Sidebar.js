import React, { useState } from 'react'
import "./sidebar.css"
import logo from "../../imgs/logo.png"
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt,UilBars} from "@iconscout/react-unicons" 
import { motion } from 'framer-motion'

const Sidebar = () => {

    const [selected , setSelected] = useState(0)
    const [expanded , setExpanded] = useState(true)

    const sidebarVariants={
        true:{left:"0"},
        false:{left:"-65%"}
    }
  return (
    <>
        <div className="bars" style={expanded?{left:"50%"}:{left:"5%"}}
        onClick={()=>setExpanded(!expanded)}>
        <UilBars/>
        </div>
        <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:""}
        >
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>Sh<span>o</span>ps</span>
        </div>
        <div className="menu">
            {SidebarData.map((item,index)=>{
                return(
                    <div className={selected===index?' menu-item active' : 'menu-item'} key={index} onClick={()=>setSelected(index)}>
                        <item.icon/>
                        <span>{item.heading}</span>
                    </div>
                )
            })}
            <div className="menu-item">
                <UilSignOutAlt/>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar