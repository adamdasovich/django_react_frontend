import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export default function AllTeamsTable({ tableData, onDelete }) {
    console.log(Array.isArray(tableData));
  return (
    <TableContainer component={Paper} sx={{ width: '100%' }}>
      <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Club Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">League</TableCell>
            <TableCell align="right">Attendance</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((tdata) => (
            <TableRow
              key={tdata.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`club/${tdata.id}`}>
                 {tdata.name}
                </Link>               
              </TableCell>
              <TableCell align="right">{tdata.city}</TableCell>
              <TableCell align="right">{tdata.country}</TableCell>
              <TableCell align="right">{tdata.league}</TableCell>
              <TableCell align="right">{tdata.attendance}</TableCell>
              <TableCell align='right'>
                  <DeleteForeverOutlinedIcon 
                    onClick={() => onDelete(tdata.id)}
                    style={{cursor: 'pointer'}}
                  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}