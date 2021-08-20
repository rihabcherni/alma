import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TypeDoc() {
  return (
    <Autocomplete
      id="typeDoc"
      options={typeDoc}
      style={{ width: '100%' , backgroundColor: 'white'}}
      getOptionLabel={(option) =>option}
      renderInput={(params) => <TextField {...params} label="Type of Document*" variant="outlined" />}
    />
  );
}
const typeDoc = [
   'Summary','Article','Scheme','Image','Assignement',
   'Cheat cheet','Case studies','Essays','Exams','Exercices',
   'Lab reports','Papers','Quizzes','Lecture slides','Projects research',
   'Study notes','Summaries','Thesis'
];