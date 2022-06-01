import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"

function createData(name, OrderID, VendorID,FAQ, startingLocation, endingLocation, capacity,AmountPayed,payedMethod,order,action) {
  return { name, OrderID,VendorID,FAQ,startingLocation, endingLocation, capacity,AmountPayed,payedMethod,order,action};
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0,2, 237, 9.0, 37, 4.3),
  createData(2, 237, 9.0, 37, 4.3,2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0,2, 237, 9.0, 37, 4.3),
  createData(4, 305, 3.7, 67, 4.3,2, 237, 9.0, 37, 4.3),
  createData(5, 356, 16.0, 49, 3.9,2, 237, 9.0, 37, 4.3),
];

export default function BasicTable() {
  return (
      <div className="table">
          <h3>Recent Orders</h3>
          <div className="table-body">
    <TableContainer component={Paper}
        style={{boxShadow:"0px 13px 20px 0px #80808029"}}
        >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Order ID</TableCell>
            <TableCell align="left">Vendor ID</TableCell>
            <TableCell align="left">FAQ</TableCell>
            <TableCell align="left">Starting Location</TableCell>
            <TableCell align="left">Ending Location</TableCell>
            <TableCell align="left">Capacity</TableCell>
            <TableCell align="left">Amount Payed</TableCell>
            <TableCell align="left">Payed Method</TableCell>
            <TableCell align="left">Order Status</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.OrderID}</TableCell>
              <TableCell align="left">{row.VendorID}</TableCell>
              <TableCell align="left">{row.FAQ}</TableCell>
              <TableCell align="left">{row.startingLocation}</TableCell>
              <TableCell align="left">{row.endingLocation}</TableCell>
              <TableCell align="left">{row.capacity}</TableCell>
              <TableCell align="left">{row.AmountPayed}</TableCell>
              <TableCell align="left">{row.payedMethod}</TableCell>
              <TableCell align="left">{row.order}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
