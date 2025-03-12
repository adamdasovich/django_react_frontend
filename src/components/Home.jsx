import React, { useState, useEffect, useMemo } from 'react';
// import AllTeamsTable from './tables/AllTeamsTable';
import AxiosInstance from './axios';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import {MaterialReactTable} from 'material-react-table'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  const [myData, setMyData] = useState([]); // Initialize as an EMPTY ARRAY

  const getData = () => {
    AxiosInstance.get('club/')
      .then(res => {
        setMyData(res.data);
        console.log(res.data)
      })
      .catch(err => console.log(err)) 
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
      },      
      {
        accessorKey: 'country_details.name',
        header: 'Country'
      },      
      {
        accessorKey: 'league_details.name',
        header: 'League'
      },
      {
        accessorKey: 'city',
        header: 'City'
      },
      {
        accessorKey: 'attendance',
        header: 'Attendance'
      },
      {
        accessorKey: 'characteristic_names',
        header: 'Characteristic',
        Cell: ({cell}) => (
          <div style={{display:'flex', gap:'8px', flexWrap: 'wrap'}}>
            {
              cell.getValue()?.map((char,index) => (
                <Chip key={index} label={char}/>
              ))
            }

          </div>
        )
      },
      {
        accessorKey: 'description',
        header: 'Description'
      },
    ]
  )

  // const deleteTeam = (id) => {
  //   setTableData(prevData => prevData.filter(team => team.id !== id))
  //   AxiosInstance.delete(`club/${id}/`)
  //     .then(() => console.log('Team Deleted'))
  //     .catch(error => console.error('Error deleting team: ', error))
  // }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
      <Box className={'TopBar'} >
        <ViewCompactIcon />
        <Typography sx={{ ml: '15px', fontWeight: 'bold' }} variant='subtitle2'>
          All Teams
        </Typography>      
      </Box>
      <MaterialReactTable
        columns={columns}
        data={myData}
        enableRowActions
        renderRowActions={({row}) => (
          <Box sx={{display: 'flex', flexWrap:'nowrap', gap:'8px'}}>
            <IconButton color='secondary' component={Link} to={`edit/${row.original.id}`}>
              <EditIcon />
            </IconButton>
            <IconButton component={Link} to={`delete/${row.original.id}`} color='warning'>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />

    </Box>
  );
};

export default Home;