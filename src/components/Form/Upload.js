import React, { useState, useEffect } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import {
  File as FileIcon,
  Trash2 as TrashIcon,
  Download as DownloadIcon,
} from 'react-feather';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { Lightbox } from 'react-modal-image';

// assets
import uploadImage from 'assets/image/upload-file.svg';

// utils
import { bytesToSize, downloadThroughUrl } from 'utils';

const { REACT_APP_API } = process.env;

const Upload = ({
  disabled,
  onChange,
  onChangeValues,
  deleteName,
  existName,
  name,
  deleteValue,
  existValue,
  value,
  limit = 10,
}) => {
  const handleChange = (newFile) => {
    onChange(name, [...value, ...newFile]);
  };

  const classes = useStyles();
  const [openedFile, setOpenedFile] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleChange,
  });

  useEffect(() => {
    setThumbnails(
      value.map((file) => {
        return URL.createObjectURL(file);
      })
    );
  }, [value]);

  return (
    <div className={classes.root}>
      {!disabled && existValue.length + value.length < limit && (
        <div
          className={clsx({
            [classes.dropZone]: true,
            [classes.dragActive]: isDragActive,
          })}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div>
            <img alt="파일 선택" className={classes.image} src={uploadImage} />
          </div>
          <div>
            <Typography color="textPrimary">
              파일을 끌어다 넣거나 클릭하여 첨부하세요!
              {limit && ` (최대 ${limit}개)`}
            </Typography>
          </div>
        </div>
      )}
      {(existValue.length > 0 || value.length > 0) && (
        <List>
          {existValue.map((image, index) => {
            const imageUrl = `${REACT_APP_API}${image}`;

            return (
              <ListItem
                key={index}
                divider={index < existValue.length + value.length - 1}
              >
                <ListItemIcon className={classes.thumbnail}>
                  {image.match(/\.(jpg|jpeg|png|gif|bmp)$/i) ? (
                    <img
                      onClick={() => {
                        setOpenedFile(imageUrl);
                      }}
                      src={imageUrl}
                    />
                  ) : (
                    <FileIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={image.split('/').pop()}
                  primaryTypographyProps={{ variant: 'h5' }}
                />
                <IconButton
                  onClick={() => {
                    downloadThroughUrl(imageUrl);
                  }}
                >
                  <DownloadIcon />
                </IconButton>
                {!disabled && (
                  <IconButton
                    onClick={() => {
                      onChangeValues({
                        [deleteName]: [...deleteValue, image],
                        [existName]: existValue.filter(
                          (existImage) => existImage !== image
                        ),
                      });
                    }}
                  >
                    <TrashIcon />
                  </IconButton>
                )}
              </ListItem>
            );
          })}
          {value.map((file, index) => {
            return (
              <ListItem
                key={index + existValue.length}
                divider={
                  index + existValue.length <
                  value.length + existValue.length - 1
                }
              >
                <ListItemIcon className={classes.thumbnail}>
                  {file.type.includes('image') ? (
                    <img
                      onClick={() => {
                        setOpenedFile(thumbnails[index]);
                      }}
                      src={thumbnails[index]}
                    />
                  ) : (
                    <FileIcon />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  primaryTypographyProps={{ variant: 'h5' }}
                  secondary={bytesToSize(file.size)}
                />
                <IconButton
                  onClick={() => {
                    onChange(
                      name,
                      value.filter((_, idx) => idx !== index)
                    );
                  }}
                >
                  <DownloadIcon />
                </IconButton>
                {!disabled && (
                  <IconButton
                    onClick={() => {
                      onChange(
                        name,
                        value.filter((_, idx) => idx !== index)
                      );
                    }}
                  >
                    <TrashIcon />
                  </IconButton>
                )}
              </ListItem>
            );
          })}
        </List>
      )}
      {openedFile && (
        <Lightbox
          hideZoom
          hideDownload
          medium={openedFile}
          onClose={() => setOpenedFile(null)}
        />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: 'pointer',
    },
  },
  dragActive: {
    backgroundColor: theme.palette.action.active,
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  thumbnail: {
    marginRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: theme.palette.background.dark,

    '& > img': {
      verticalAlign: 'top',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
}));

export default Upload;
