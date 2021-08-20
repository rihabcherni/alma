import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
export default function TypeDegree() {
  return (
    <Autocomplete
      id="typeDegree"
      options={typeDegree}
      style={{ backgroundColor: 'white',width: 310, marginBottom:'10px'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Type of Document*" variant="outlined" />}
    />
  );
}
const typeDegree = [
   'Bachelor','License','Certificat','Diploma','Master','Doctorat'
];