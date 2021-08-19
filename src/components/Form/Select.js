import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  makeStyles,
  InputLabel,
} from '@material-ui/core';

const SelectComponent = ({
  disabled,
  onChange,
  name,
  value,
  options,
  fullWidth,
  placeholder,
  className,
}) => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth={fullWidth}
      className={className ? className : classes.root}
    >
      {placeholder && (
        <InputLabel style={{ marginLeft: 10 }}>{placeholder}</InputLabel>
      )}
      <Select
        disabled={disabled}
        variant="outlined"
        onChange={(e) => {
          onChange(e.target.name, e.target.value);
        }}
        value={value}
        name={name}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
  },
}));

export default SelectComponent;
