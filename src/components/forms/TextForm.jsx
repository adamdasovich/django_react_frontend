import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextForm({label, value, name, onBlur, onChange, error, helperText}) {
  return (   
    <TextField 
        id="standard-basic"
        sx={{width:'100%'}}
        value={value}
        onChange={onChange}         
        label={label}
        variant="outlined"
        name = {name} 
        onBlur={onBlur}
        error={error}
        helperText={helperText}
    />
  );
}
