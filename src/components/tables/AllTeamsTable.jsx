import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function AllTeamsTable({ tableData }) {
  console.log(Array.isArray(tableData)); // Should log true

  return (
    <TableContainer component={Paper} sx={{ width: '100%' }}> {/* Ensure width here */}
      <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table"> {/* Ensure width here */}
        <TableHead>
          <TableRow>
            <TableCell>Club Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">League</TableCell>
            <TableCell align="right">Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((tdata) => ( // Use map directly on tableData (array)
            <TableRow
              key={tdata.id} // Or whatever unique ID your data has
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}