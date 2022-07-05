import React from 'react'
import './dashboard.css'
import {DashboardCard} from '../Data/DashboardCard'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
     {DashboardCard.map((card,index)=>{
      const {id , title , number} = card
      return(<div className="col-3 col-md-3 col-sm-12 me-3 text-center" key={index}>
        <div className="content">
          <h2 id='id'>{id}</h2>
          <h3 className='title'>{title}</h3>
          <p className='number'>{number}</p>
          {/* <a href="/">Read More</a> */}
        </div>
        </div>
     )})}
     </div>
    </div>
  )
}

export default Dashboard