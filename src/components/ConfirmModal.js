import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Button, Dialog, Typography, makeStyles } from '@material-ui/core';

const ConfirmModal = ({
  yesButtonTitle,
  noButtonTitle,
  primaryText,
  secondaryText,
  open,
  onClose,
  onApply,
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

        {secondaryText ? (
          <Typography align="left" variant="subtitle2" color="textSecondary">
            {secondaryText}
          </Typography>
        ) : null}
      </div>
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
    minWidth: 350,
  },

  buttons: {
    padding: theme.spacing(0.5),
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
}));

ConfirmModal.propTypes = {
  className: PropTypes.string,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

ConfirmModal.defaultProps = {
  onApply: () => {},
  onClose: () => {},
};

export default ConfirmModal;
