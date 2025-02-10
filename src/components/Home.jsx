import React, { useState, useEffect } from 'react';
import AllTeamsTable from './tables/AllTeamsTable';
import AxiosInstance from './axios';
import { Box } from '@mui/material';

const Home = () => {
  const [tableData, setTableData] = useState([]); // Initialize as an EMPTY ARRAY

  const getData = () => {
    AxiosInstance.get('club/')
      .then(res => setTableData(res.data));

    AxiosInstance.get('club/1')
      .then(res => console.log(res.data))
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteTeam = (id) => {
    setTableData(prevData => prevData.filter(team => team.id !== id))
    AxiosInstance.delete(`club/${id}/`)
      .then(() => console.log('Team Deleted'))
      .catch(error => console.error('Error deleting team: ', error))
  }

  console.log(typeof tableData); // This should now log "object" (an array is a type of object in JS)
  console.log(tableData)

  return (
    <Box sx={{ marginLeft: '200px', marginRight: '10px'}}>
      <h1>All Clubs</h1>
      <AllTeamsTable tableData={tableData} onDelete={deleteTeam}/>
    </Box>
  );
};

export default Home;