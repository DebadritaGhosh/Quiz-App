import React from 'react';
import {
  makeStyles,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const RadioComponent = ({
  disabled,
  onChange,
  name,
  value,
  options,
  direction,
}) => {
  const classes = useStyles();

  return (
    <FormControl>
      <RadioGroup
        className={
          direction === 'column'
            ? classes.radioGroupColumn
            : classes.radioGroupRow
        }
        onChange={(e) => onChange(e.target.name, e.target.value)}
        name={name}
        value={value}
      >
        {options.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              label={item.label}
              value={item.value}
              control={<Radio disabled={disabled} />}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  radioGroupRow: {
    flexDirection: 'row',
  },
  radioGroupColumn: {
    flexDirection: 'column',
  },
}));

export default RadioComponent;
