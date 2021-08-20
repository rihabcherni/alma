import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Tutor() {
  return (
    <Autocomplete
      id="Tutor"
      options={sortBy}
      style={{ width: '100%' , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Tutor*" variant="outlined" />}
    />
  );
}
const sortBy = [''];