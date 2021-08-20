import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';

export default function Fields() {
  return (
    <Autocomplete
      id="field"
      options={field}
      style={{ width: '100%' , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Select the field*" variant="outlined" />}
    />
  );
}
const field = [
   'Accounting' , 'Art' ,'Biology' ,'Biomedical & Pharmaceutical Science' ,'Business & Management' ,'Chemistry'  
   ,'Communication' ,'Computer Science' ,'Data Science' ,'Design' ,'Economics' ,'Engineering' ,'English', 'Finance',
   'Foreign languages', 'French' ,'German' , 'History' ,'Humanities' ,'Law' ,'Management' ,'Mathematics',
   'Medical Science' , 'Natural Science' ,'Philosophy' ,'Physics' ,'Political Science' ,'Programming' ,
   'Psychology & Education' ,'Statistics' ,'Theology' ,'test'
];