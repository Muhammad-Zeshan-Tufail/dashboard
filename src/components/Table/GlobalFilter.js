import React from 'react'
import './globalFilter.css'

const GlobalFilter = ({filter ,setFilter}) => {
    return (
    <div className="search-form">
            <div className="input">
                <input type="text" value={filter || ''} onChange={e =>setFilter(e.target.value)} placeholder='Search Here' />
            </div>
        </div>
    )
}

export default GlobalFilter