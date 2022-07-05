// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import "./pages.css"
// import { actionCreators } from '../state'

// const Customers = () => {
//   const dispatch = useDispatch()
//   const amount = useSelector(state=>state.amount)
//   return (
//     <>
//     <div className="container">
//       <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.withDrawMoney(10))}> - </button>
//       <h4>Balance:{amount}</h4>
//       <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.depositMoney(10))}> + </button>
//     </div>
//     </>
//   )
// }

// export default Customers


import React from 'react'
import BasicTable from '../components/Table/customers/BasicTable'

const Customers = () => {
  return (
    <div>
      <BasicTable/>
    </div>
  )
}

export default Customers