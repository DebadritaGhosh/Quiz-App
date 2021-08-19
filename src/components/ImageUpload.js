import React, { useCallback } from 'react';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { bytesToSize } from 'utils';

const ImageUpload = ({ image, setImage, disabled }) => {
  const classes = useStyles();

  const onImageAdded = useCallback((acceptedFiles) => {
    const url = acceptedFiles[0]?.hasOwnProperty('url')
      ? acceptedFiles[0].url
      : URL.createObjectURL(acceptedFiles[0]);

    acceptedFiles[0].url = url;
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onImageAdded,
  });

  return (
    <Box>
      {image.length !== 0 && (
        <span className={classes.image}>
          <img src={image.url} />
        </span>
      )}

      <div className={classes.buttonsContainer}>
        <input {...getInputProps()} multiple={false} />
        <Button
          variant="contained"
          size="small"
          disabled={disabled}
          {...getRootProps()}
        >
          파일 선택
        </Button>
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
      </div>
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
  buttonsContainer: {
    alignItems: 'center',
    marginTop: theme.spacing(2),
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default ImageUpload;
