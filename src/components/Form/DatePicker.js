import React from 'react';
import { FormControl, makeStyles, Typography } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

const DatePickerComponent = ({
  disabled,
  useUpTo,
  onChange,
  name,
  upToName,
  value,
  upToValue,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.wrapper}>
      <KeyboardDatePicker
        disabled={disabled}
        className={classes.picker}
        disableToolbar
        inputVariant="outlined"
        format="YYYY-MM-DD"
        minDate={new Date('1000-01-01')}
        maxDate={upToValue ? new Date(upToValue) : new Date('2999-12-31')}
        onChange={(e) => onChange(name, moment(e).format('YYYY-MM-DD'))}
        value={value ? moment(value).format('YYYY-MM-DD') : null}
      />
      {useUpTo && (
        <>
          <Typography className={classes.divider}>~</Typography>
          <KeyboardDatePicker
            disabled={disabled}
            className={classes.picker}
            disableToolbar
            inputVariant="outlined"
            format="YYYY-MM-DD"
            minDate={value ? new Date(value) : new Date('1000-01-01')}
            maxDate={new Date('2999-12-31')}
            onChange={(e) => onChange(upToName, moment(e).format('YYYY-MM-DD'))}
            value={upToValue ? moment(upToValue).format('YYYY-MM-DD') : null}
          />
        </>
      )}
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  divider: {
    margin: '10px 10px',
  },
  picker: {
    //flex: 1,
    width: 200,
  },
}));

export default DatePickerComponent;
