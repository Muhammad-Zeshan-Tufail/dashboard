import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../BasicTable.css"
import Modal from "../../modal/Modal";
import { useGlobalContext } from "./context";
import {MdDelete} from "react-icons/md"
import {FiEdit} from "react-icons/fi"


function ProductTable() {

  
  const {openModal , isModalOpen,data ,handleUpdate,handleDelete,handleDisable,filter,setFilter} = useGlobalContext()

  return (
   <>
   <div className="table-container">
        <div className="header">
            <div className="btn">
                <button onClick={openModal}>Add Product</button>
            </div>
            { isModalOpen && <Modal /> }
            <div className="search-form">
            <div className="input">
                <input type="text" value={filter || ""} onChange={(e)=>setFilter(e.target.value)}placeholder='Search Product' />
            </div>
        </div>
        </div>
  <ToastContainer/>
      <div className="table-wrapper">
        <table>
          <thead className="bg-dark">
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data && data.filter((item) =>{
          
            if(filter === ""){
                        return item
                    }
                    else if(item.product_name.toLowerCase()
                            .includes(filter.toLowerCase())){
                        return item
                    }
                }).map((item , index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.product_name}</td>
                    <td>{item.brand}</td>
                    <td>{item.color}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <div className="btn-group">
                        <button style={{margin:"0 10px"}} disabled={item.isDis?true:false} onClick={()=>handleUpdate(item.id)}>
                          <FiEdit/>
                        </button>
                        <button style={{margin:"0 10px" }} disabled={item.isDis?true:false} onClick={()=>handleDelete(item.id)}>
                          <MdDelete/>
                        </button>
                        {/* <button style={{marginRight:"5px"}} onClick={()=>handleDisable(item.id , item.isDis)}>
                          {item.isDis?"Enable":"Disable"}
                        </button> */}

                        <div className="form-check form-switch" onClick={()=>handleDisable(item.id , item.isDis)} style={{margin:"0 10px"}}>
                          {item.isDis?<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>:
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked " defaultChecked/>}
                        </div>

                      </div>
                    </td>
                  </tr>
          ))}
          </tbody>
        </table>
  </div>
  </div>
  </>
  );
}

export default ProductTable;
