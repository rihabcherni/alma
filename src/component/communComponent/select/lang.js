import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Language() {
  return (
    <Autocomplete
      id="Lang"
      options={Lang}
      style={{ width: '100%' , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Language*" variant="outlined" />}
    />
  );
}
const Lang = [
   'Ar','Fr','Sp','En'
];