import React from "react";
import {ToastContainer } from "react-toastify";
import { useGlobalContext } from "./context";
import "../../modal/Modal.css";

function Modal() {
  const {closeModal,handleSubmit,handleChange,editMood,state} = useGlobalContext()
  const {name , address ,details} = state

  return (
    <div className="modalBackground">
      <ToastContainer/>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="title">
          <h1>Add New Vendor</h1>
        </div>
        <div className="body">
        
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{textAlign:"left"}}>Vendor Name</label>
            <input type='text' name='name' placeholder='Enter Vendor Name' value={name} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label style={{textAlign:"left"}}>Address</label>
            <input type='text' name='address' placeholder='Enter Address' value={address} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label style={{textAlign:"left"}}>Details</label>
            <input type='text' name='details' placeholder="Enter Details" value={details} onChange={handleChange}/>
          </div>

        <div className="footer">
          <button onClick={closeModal } id="cancelBtn">Cancel</button>
          <div className="d-grid gap-2 mt-2">
            <button type='submit' onSubmit={handleSubmit}>{editMood?"Update":"Submit"}</button>
          </div>
        </div>
        </form>

        </div>
      </div>
    </div>
  );
}

export default Modal;
