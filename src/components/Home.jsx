import React, { useState, useEffect, useMemo } from 'react';
// import AllTeamsTable from './tables/AllTeamsTable';
import AxiosInstance from './axios';
import { Box, Typography, Chip } from '@mui/material';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import {MaterialReactTable} from 'material-react-table'

const Home = () => {
  const [myData, setMyData] = useState([]); // Initialize as an EMPTY ARRAY

  const getData = () => {
    AxiosInstance.get('club/')
      .then(res => {
        setMyData(res.data);
        console.log(res.data)
      }) 
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        muiTableHeadCellProps: {align: 'center'},
        muiTableBodyCellProps: {align: 'center'}
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
      }
    ]
  )

  // const deleteTeam = (id) => {
  //   setTableData(prevData => prevData.filter(team => team.id !== id))
  //   AxiosInstance.delete(`club/${id}/`)
  //     .then(() => console.log('Team Deleted'))
  //     .catch(error => console.error('Error deleting team: ', error))
  // }

  return (
    <div>
    <Box className={'TopBar'} sx={{marginLeft: '100px'}}>
        <ViewCompactIcon />
        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} variant='subtitle2'>
          All Teams
        </Typography>      
      </Box>
      <MaterialReactTable
        columns={columns}
        data={myData}
      />

    </div>
  );
};

export default Home;