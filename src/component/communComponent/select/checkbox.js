import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function CheckboxSell() {
  return (
     <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="I certifie that the uploded content does not violate the Alma’a terms of use"
        style={{color:"#7F7B88"}}
        labelPlacement="end"
     />
  );
}