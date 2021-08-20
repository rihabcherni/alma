import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SortBy() {
  return (
    <Autocomplete
      id="SortBy"
      options={sortBy}
      style={{ width: '100%' , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Sort By*" variant="outlined" />}
    />
  );
}
const sortBy = ['ASC','DESC'];


