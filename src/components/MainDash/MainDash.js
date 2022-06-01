import React from 'react'
import Table from '../Table/Table'
import "./MainDash.css"

const MainDash = () => {
  return (
    <div className='main-dash'>
        <div className="search-form">
          <div className="input">
            <input type="text" placeholder='Search Order ID' />
          </div>
        </div>
        <Table/>
    </div>
  )
}

export default MainDash