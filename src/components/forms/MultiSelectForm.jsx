import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormHelperText from '@mui/material/FormHelperText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelectForm({ label, options, value, onChange, name, onBlur, error, helperText }) {
  const theme = useTheme();
  
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id={`${label}-multi-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-multi-select-label`}
        id={`${label}-multi-select`}
        multiple
        value={Array.isArray(value) ? value : []} // Ensure it's always an array
        onChange={onChange}
        name = {name} 
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((selectedId) => {
              const option = options.find((option) => option.value === selectedId);
              return option ? <Chip key={selectedId} label={option.label} /> : null;
            })}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {options.length > 0 ? (
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options available</MenuItem>
        )}
      </Select>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  );
}

