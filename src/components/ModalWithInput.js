import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Dialog,
  Typography,
  makeStyles,
  TextField,
} from '@material-ui/core';

const ModalWithInput = ({
  yesButtonTitle,
  noButtonTitle,
  primaryText,
  open,
  onClose,
  onApply,
  textFieldLabel,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Dialog maxWidth="md" onClose={onClose} open={open}>
      <div className={clsx(classes.root, className)} {...rest}>
        {primaryText ? (
          <Typography
            className={classes.title}
            align="left"
            gutterBottom
            variant="h4"
            color="textPrimary"
          >
            {primaryText}
          </Typography>
        ) : null}
      </div>

      {textFieldLabel && (
        <Typography
          variant="h4"
          color="textPrimary"
          className={classes.textField}
        >
          {textFieldLabel}
        </Typography>
      )}
      <TextField variant="outlined" className={classes.textField} />

      <Box display="flex" justifyContent="flex-end" className={classes.buttons}>
        <Button onClick={onClose} variant="contained" size="small">
          {noButtonTitle ? noButtonTitle : 'Cancel'}
        </Button>
        <Button
          onClick={onApply}
          variant="contained"
          color="primary"
          size="small"
        >
          {yesButtonTitle ? yesButtonTitle : 'OK'}
        </Button>
      </Box>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    maxWidth: 550,
  },

  buttons: {
    padding: theme.spacing(0.5),
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

ModalWithInput.propTypes = {
  className: PropTypes.string,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

ModalWithInput.defaultProps = {
  onApply: () => {},
  onClose: () => {},
};

export default ModalWithInput;
