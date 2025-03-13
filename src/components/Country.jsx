import React, {useState, useEffect, useMemo} from 'react'
import AxiosInstance from './axios'
import { useParams } from 'react-router-dom'
import { Box, Typography, Chip, IconButton } from '@mui/material'
import { MaterialReactTable } from 'material-react-table'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Country = () => {
  const [clubData, setClubData] = useState([])

  const pageParam = useParams()
  const countryId = pageParam.id
  console.log(countryId)

  const getData = () => {
    AxiosInstance.get(`country/${countryId}/`)
    .then(res => {
        setClubData(res.data)
        console.log(res.data)
    })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getData()
  }, [countryId])

  const columns = useMemo(
    () => [
      {
        accessoryKey: 'name',
        header: 'Name',
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


  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
      <Box className={'TopBar'}>
        <Typography sx={{ ml: '15px', fontWeight: 'bold' }} variant='subtitle2'>
          {clubData[0]?.country_details?.name ? `All Teams from: ${clubData[0].country_details.name}` : 'Loading teams...'}
        </Typography>
      </Box>
      <MaterialReactTable
        columns={columns}
        data={clubData}
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
  )
}

export default Country