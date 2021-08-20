import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles } from "@material-ui/core/styles";

const CustomAutocomplete = withStyles({
  tag: {
    backgroundColor: "white",
    border:'solid  1.5px #355b97',
    zIndex: 0,
    "& .MuiChip-label": {
      color: "black"
    },
    "& .MuiChip-deleteIcon": {
      color: "#355b97"
    },
    "&:after": {
      content: '""',
      right: 10,
      top: 6,
      height: 12,
      width: 12,
      position: "absolute",
      backgroundColor: "white",
      zIndex: -1
    }
  }
})(Autocomplete);

export default function Tags() {
  return (
    <div style={{ width: '96%' , margin:'-14px 0 -12px 0'  }}>
      <CustomAutocomplete
        multiple
        id="tags-standard"
        options={language}
        getOptionLabel={option => option}
        renderInput={params => ( 
          <TextField
            {...params}
            variant="outlined"
            label="Multiple values"
            margin="normal"
            fullWidth
          /> 
        )}
      />
    </div>
  );
}

const language = [
  'French',
  'English',
  'Spanish',
  'Allemand',
];
