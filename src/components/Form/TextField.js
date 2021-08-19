import React from 'react';
import {
  FormControl,
  TextField,
  SvgIcon,
  InputAdornment,
  makeStyles,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const SelectComponent = ({
  disabled,
  onChange,
  name,
  value,
  fullWidth,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth={fullWidth} className={classes.input}>
      <TextField
        disabled={disabled}
        className={classes.queryField}
        onChange={(e) => {
          onChange(e.target.name, e.target.value);
        }}
        value={value}
        name={name}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SvgIcon fontSize="small" color="action">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  input: {},
}));

export default SelectComponent;
