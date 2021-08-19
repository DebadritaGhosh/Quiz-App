import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const MultipleImageDisplay = ({ images }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {images &&
        images.map((image) => {
          return (
            <span
              className={classes.image}
              onClick={() => window.open(image.url, '_blank')}
            >
              <img src={image.url} />
            </span>
          );
        })}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
    display: 'block',
    borderRadius: 5,
    background: '#fff',
    boxShadow: '0px 10px 20px 0 rgba(0, 0, 0, 0.1)',
    zIndex: 99,
    backgroundColor: theme.palette.background.dark,
    backgroundSize: '100% auto',
    border: '1px solid #eee',
    marginLeft: 5,
    marginRight: 5,
    cursor: 'pointer',
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

export default MultipleImageDisplay;
