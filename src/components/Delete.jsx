import React, {useState, useEffect} from 'react'
import { Box, Button, Typography } from '@mui/material';
// import DeleteBoxIcon from '@mui/icons-material/DeleteBox';
import AxiosInstance from './axios';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate, useParams } from 'react-router-dom';
import MyMessage from './forms/Message';

const Delete = () => {
  const [message, setMessage] = useState('')
  const [myData, setMyData] = useState({
            name: '',
            city: '',
            league: '',
            country: '',
            attendance: 0,
            characteristic: [],
            description: '',
          }); 
    const myParameter = useParams()
    const pageId = myParameter.id
    console.log(myData)
    const navigate = useNavigate()

    const GetData = () => {
      AxiosInstance.get(`club/${pageId}/`)
          .then(res => {
            setMyData(res.data)
          })
        }
    
    useEffect(() => {
      GetData()
    }, [])

    const DeleteRecord = (e) => {
      e.preventDefault()
          AxiosInstance.delete(`club/${pageId}/`)
          .then(() => {
            setMessage(
              <MyMessage 
                messageText = {'You successfully deleted data on the db.'}
                messagecolor={'green'}
              />
            )
            setTimeout(() => {
              navigate('/')
            }, 1500)
          })
        }

  
  return (
    <Box>
      <form onSubmit={DeleteRecord}>
      <Box className={'TopBar'} sx={{ml: '100px'}}>
        <AddBoxIcon />
        <Typography sx={{ ml: '15px', fontWeight: 'bold' }} variant='subtitle2'>
          Delete Team?
        </Typography>             
      </Box>
      {message}  
      <Box className={'TextBox'}>
        <Typography>
          Are you sure you want to delete <strong>{myData.name}</strong>?
        </Typography>
      </Box>
      <Box sx={{ml: '30px'}}>
        <Button type='submit' variant='contained' fulWidth>Delete</Button>
      </Box>
      </form>
    </Box>
  )
}

export default Delete