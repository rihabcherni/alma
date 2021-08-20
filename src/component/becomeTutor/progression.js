import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';

export default function CustomizedSelects() {
  return (      
    <Autocomplete
      id="field" 
      options={field}
      style={{ width: 310 , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Progression*" variant="outlined" />}
    />
  );
} 
const field = [
   '1st Year' , '2nd Year' ,'3st Year' ,'4th Year' ,'5th Year'
];
   
 