import React, { useState, useEffect } from 'react';
import AxiosInstance from './axios';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './forms/TextForm';
import SelectForm from './forms/SelectForm';
import MultiSelectForm from './forms/MultiSelectForm';
import DescriptionForm from './forms/DescriptionForm';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);


  const getData = () => {
    AxiosInstance.get('country/')
      .then((res) => setCountry(res.data.map(item => ({ label: item.name, value: item.id }))));

    AxiosInstance.get('league/')
      .then((res) => setLeague(res.data.map(item => ({ label: item.name, value: item.id }))));

    AxiosInstance.get('characteristic/')
      .then((res) => setCharacteristic(res.data.map(item => ({ label: item.name, value: item.id }))));
  };

  useEffect(() => {
    getData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: 'Adam',
      city: '',
      league: '',
      country: '',
      attendance: 0,
      characteristic: [],
    },
    onSubmit: (values) => {
      AxiosInstance.post(`club/`, values)
      .then(() => {
        console.log('Success!!')
      })
    }

  })


  console.log('Form values ', formik.values)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Box className={'TopBar'}>
        <AddBoxIcon />
        <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} variant='subtitle2'>
          Create a new Team
        </Typography>
      </Box>
      <Box className={'FormBox'}>
        <Box className={'FormArea'}>
          <Box sx={{ marginTop: '30px' }}>
            <TextForm
              label={'Club Name'}
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            <TextForm
              label={'City'}
              name='city'
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            <SelectForm
              label={'Country'}
              options={country}
              name='country'
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            <Button type='submit' variant="contained" color="primary" >
              Submit
            </Button>
          </Box>
        </Box>
        <Box className={'FormArea'}>
          <Box sx={{ marginTop: '30px' }}>
            <SelectForm
              label={'League'}
              options={league}
              name='league'
              value={formik.values.league}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            <TextForm
              label={'Attendance'}
              name='attendance'
              value={formik.values.attendance}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            <MultiSelectForm
              label={'Characteristics'}
              options={characteristic}
              name='characteristic'
              value={formik.values.characteristic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
        </Box>
        <Box className={'FormArea'}>
          <Box sx={{ marginTop: '30px' }}>
            <DescriptionForm
              label={'Description'}
              rows={9}
              name='description'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
        </Box>
      </Box>
      </form>
    </div>
  );
};

export default Create;
