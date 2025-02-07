import React, { useState, useEffect } from 'react';
import AllTeamsTable from './tables/AllTeamsTable';
import AxiosInstance from './axios';
import { Box } from '@mui/material';

const Home = () => {
  const [tableData, setTableData] = useState([]); // Initialize as an EMPTY ARRAY

  const getData = () => {
    AxiosInstance.get('club/')
      .then(res => setTableData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(typeof tableData); // This should now log "object" (an array is a type of object in JS)
  console.log(tableData)

  return (
    <Box sx={{ marginLeft: '200px', marginRight: '10px'}}>
      <h1>All Clubs</h1>
      <AllTeamsTable tableData={tableData} />
    </Box>
  );
};

export default Home;