import React from 'react';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import { bytesToSize } from 'utils';

const SingleImageDisplay = ({ image }) => {
  const classes = useStyles();

  return (
    <Box>
      <span className={classes.image}>
        <img src={image.url} />
      </span>
      <Button
        color="primary"
        size="small"
        onClick={(e) => {
          e.preventDefault();
          window.open(image.url);
        }}
      >
        <Typography variant="h6" className={classes.imageName}>
          {image.name}
        </Typography>
        <Typography variant="h6" className={classes.imageSize}>
          {image.size && bytesToSize(image.size)}
        </Typography>
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  imageName: {
    marginTop: theme.spacing(1),
  },
  imageSize: {
    marginTop: theme.spacing(1),
    marginLeft: 20,
  },

  image: {
    height: 250,
    width: 250,
    display: 'block',
    borderRadius: 5,
    background: '#fff',
    boxShadow: '0px 10px 20px 0 rgba(0, 0, 0, 0.1)',
    zIndex: 99,
    backgroundColor: theme.palette.background.dark,
    backgroundSize: '100% auto',
    border: '1px solid #eee',
    marginLeft: 5,
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

export default SingleImageDisplay;
