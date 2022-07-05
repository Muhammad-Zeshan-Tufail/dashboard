import React, { useState } from 'react'
import BarChart from '../../components/charts/BarChart'
import DoughnutChart from '../../components/charts/DoughnutChart'
import LineChart from '../../components/charts/LineChart'
import PieChart from '../../components/charts/PieChart'
import "./Analytics.css"
import { UserData } from '../../Data/ChartData'

const Analytics = () => {

  const [userData , setUserData] = useState({
    labels: UserData.map((data)=>data.year) ,
    datasets: [{
      label:"Users Gained",
      data: UserData.map((data)=>data.userGain),
      backgroundColor: UserData.map((data)=>data.backgroundColor)
    }]
  })

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='chart-container col-6 col-md-6 col-12'>
            <BarChart chartData={userData} />
          </div>
          <div className='chart-container col-6 col-md-6 col-12'>
          <LineChart chartData={userData}/>
          </div>
        </div>
        <div className="row">
          <div className='chart-container col-6 col-md-6 col-12'>
          <DoughnutChart/>
          </div>
          <div className='chart-container col-6 col-md-6 col-12'>
          <PieChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics