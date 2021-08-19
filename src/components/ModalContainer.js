import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Dialog, Typography, makeStyles } from '@material-ui/core';

const ModalContainer = ({
  modalTitle,
  open,
  onClose,
  className,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Dialog maxWidth="md" onClose={onClose} open={open}>
      <div className={clsx(classes.root, className)} {...rest}>
        {modalTitle && (
          <Typography variant="h3" className={classes.modalTitle}>
            {modalTitle}
          </Typography>
        )}
      </div>
      {children}
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    maxWidth: 550,
  },
  modalTitle: {
    fontWeight: 'bold',
  },
}));

ModalContainer.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

ModalContainer.defaultProps = {
  onClose: () => {},
};

export default ModalContainer;
