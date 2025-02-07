import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function DescriptionForm({label, rows, name, value, onBlur, onChange}) {
  return (
            <TextField
          id="outlined-multiline-static"
          label={label}
          multiline
          sx={{width:'100%'}}
          rows={rows}
          value={value}
          name = {name} 
          onBlur={onBlur}
          onChange={onChange}
        />      
  );
}
