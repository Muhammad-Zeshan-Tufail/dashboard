// import React, { useMemo } from "react";
// import {
//   useTable,
//   useGlobalFilter,
//   usePagination,
// } from "react-table/dist/react-table.development";
// import VendorTableData from './VendorTableData.json'
// import { COLUMNS } from "./columns";
// import '../BasicTable.css'
// import GlobalFilter from '../GlobalFilter'

// const VendorTable = () => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => VendorTableData, []);

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     usePagination
//   );
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     gotoPage,
//     pageCount,
//     pageOptions,
//     prepareRow,
//     state,
//     setGlobalFilter,
//   } = tableInstance;

//   const { globalFilter, pageIndex } = state;


//   return (
//     <div className="table-container">
//      <div>
//       <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
//     </div>
//       <div className="table-wrapper">
//         <table {...getTableProps()}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => {
//                     return (
//                       <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div className="btn-group">
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {"<<"}
//         </button>
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           Prev
//         </button>
//         <span>
//           {""}
//           <strong>
//             {pageIndex + 1} / {pageOptions.length} {""}
//           </strong>
//         </span>
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           Next
//         </button>
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {">>"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VendorTable;




// ==================================
// ==================================

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../BasicTable.css"
import Modal from "./Modal";
import { useGlobalContext } from "./context";
import {MdDelete} from "react-icons/md"
import {FiEdit} from "react-icons/fi"


function VendorTable() {

  const {openModal, isModalOpen,data ,handleUpdate,handleDelete,handleDisable,filter,setFilter} = useGlobalContext()
  
  return (
   <>
   <div className="table-container">
        <div className="header">
            <div className="btn">
                <button onClick={openModal}>Add Vendor</button>
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
              <th>ID</th>
              <th>Vendor Name</th>
              <th>Address</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data && data.filter((item) =>{
          
            if(filter === ""){
                        return item
                    }
                    else if(item.name.toLowerCase()
                    .includes(filter.toLowerCase())){
                      return item
            }}).map((item , index)=>(
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.details}</td>
                    <td>
                      <div className="btn-group">
                        <button style={{margin:"0 10px"}} disabled={item.isDis?true:false} onClick={()=>handleUpdate(item.id)}>
                          <FiEdit/>
                        </button>
                        <button style={{margin:"0 10px" }} disabled={item.isDis?true:false} onClick={()=>handleDelete(item.id)}>
                          <MdDelete/>
                        </button>
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
        
        {/* <nav>
          <ul className="pagination justify-content-center">
            <li className="page-link m-1">{"<<"}</li>
            <li className="page-link m-1">{"<Prev"}</li>
            <li className="page-link m-1">{"Next>"}</li>
            <li className="page-link m-1">{">>"}</li>
          </ul>
        </nav> */}
  </div>
  </div>
  </>
  );
}

export default VendorTable;


