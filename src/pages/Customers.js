import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {bindActionCreators} from "redux"
import "./pages.css"
import { actionCreators } from '../state'

const Customers = () => {
  const dispatch = useDispatch()
  const amount = useSelector(state=>state.amount)
  // const {depositMoney,withDrawMoney} = bindActionCreators(actionCreaters , dispatch)
  return (
    <>
    <div className="container">
      <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.withDrawMoney(10))}> - </button>
      <h4>Balance:{amount}</h4>
      <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.depositMoney(10))}> + </button>
      {/* <button className='btn btn-primary' onClick={()=>(withDrawMoney(15))}> - </button>
      <h4>Balance:{amount}</h4>
      <button className='btn btn-primary' onClick={()=>(depositMoney(15))}> + </button> */}
    </div>
    </>
  )
}

export default Customers