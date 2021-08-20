import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default  function Doc() {
    return (
      <Autocomplete 
        id="Doc"
        options={doc}
        style={{ width: 310 , backgroundColor: 'white' , margin:'12px 0'}}
        getOptionLabel={(option) =>option }
        renderInput={(params) => <TextField {...params} label='Document or request*' variant="outlined" />}
      />
    );
  }
  const doc = [
     'Document' ,'Request'
  ];
