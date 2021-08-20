import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';

export default function AcademicLevel() {
  
  return (
    <Autocomplete
      id="academic"
      options={academic}
      style={{ width: '100%' , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option }
      renderInput={(params) => <TextField {...params} 
      label="Academic level*" variant="outlined" fullWidth />}
    />
  );
}
const academic = ['Associate' ,'Bachelor','Master','Doctoral'];