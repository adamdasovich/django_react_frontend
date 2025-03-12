import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

const Root = () => {
  return (
    <>        
        <Box sx={{display: 'flex'}}>
           <Navbar content={<Outlet />} /> 
        </Box>
    </>
  )
}

export default Root