import React from 'react';
import { FormControl, Select, MenuItem, makeStyles } from '@material-ui/core';

const ArtistSelect = ({ disabled, onChange, value, options }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.select} variant="outlined">
      <Select
        disabled={disabled}
        displayEmpty
        onChange={(e) => onChange(e)}
        value={value}
        defaultValue=""
      >
        {options.map((item, index) => (
          <MenuItem key={item.value ? item.value : index} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  select: {
    padding: theme.spacing(0.5),
    '& > select': {
      margin: theme.spacing(0.5),
    },
    width: 250,
  },
}));

export default ArtistSelect;
