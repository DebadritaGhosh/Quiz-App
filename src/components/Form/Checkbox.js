import React from 'react';
import { Box, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';

const CheckboxComponent = ({
  disabled,
  justifyContent,
  onChange,
  label,
  name,
  value,
  options,
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent={justifyContent || 'flex-start'}>
      {Array.isArray(options) ? (
        //options를 사용하는 경우 체크박스 여러개, value 타입은 Array
        options.map((item) => {
          return (
            <FormControlLabel
              key={item.value}
              className={item.label ? null : classes.noLabel}
              label={item.label}
              control={
                <Checkbox
                  disabled={disabled}
                  onChange={(e) =>
                    onChange(
                      e.target.name,
                      value.includes(item.value)
                        ? value.filter((val) => val !== item.value)
                        : [...value, item.value]
                    )
                  }
                  name={name}
                  checked={value.includes(item.value)}
                />
              }
            />
          );
        })
      ) : (
        // options를 사용하지 않는 경우 체크박스 한개, value 타입은 Boolean
        <FormControlLabel
          className={label ? null : classes.noLabel}
          label={label}
          control={
            <Checkbox
              disabled={disabled}
              onChange={(e) => onChange(e.target.name, e.target.checked)}
              name={name}
              checked={value}
            />
          }
        />
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  noLabel: {
    margin: 0,
  },
}));

export default CheckboxComponent;
