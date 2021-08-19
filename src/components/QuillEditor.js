import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ReactQuill from 'react-quill';
import { makeStyles } from '@material-ui/core';

const QuillEditor = ({ className, ...rest }) => {
  const classes = useStyles();
  const [modules, setModules] = useState({});

  useEffect(() => {
    setModules({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: [] }],
        ['clean'],
      ],
    });
  }, []);

  return (
    <ReactQuill
      className={clsx(classes.root, className)}
      modules={modules}
      {...rest}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .ql-toolbar': {
      borderLeft: 'none',
      borderTop: 'none',
      borderRight: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
      '& .ql-picker-label:hover': {
        color: theme.palette.secondary.main,
      },
      '& .ql-picker-label.ql-active': {
        color: theme.palette.secondary.main,
      },
      '& .ql-picker-item:hover': {
        color: theme.palette.secondary.main,
      },
      '& .ql-picker-item.ql-selected': {
        color: theme.palette.secondary.main,
      },
      '& button:hover': {
        color: theme.palette.secondary.main,
        '& .ql-stroke': {
          stroke: theme.palette.secondary.main,
        },
      },
      '& button:focus': {
        color: theme.palette.secondary.main,
        '& .ql-stroke': {
          stroke: theme.palette.secondary.main,
        },
      },
      '& button.ql-active': {
        '& .ql-stroke': {
          stroke: theme.palette.secondary.main,
        },
      },
      '& .ql-stroke': {
        stroke: theme.palette.text.primary,
      },
      '& .ql-picker': {
        color: theme.palette.text.primary,
      },
      '& .ql-picker-options': {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        border: 'none',
        boxShadow: theme.shadows[10],
        borderRadius: theme.shape.borderRadius,
      },
    },
    '& .ql-container': {
      border: 'none',
      '& .ql-editor': {
        fontFamily: theme.typography.fontFamily,
        fontSize: 16,
        color: theme.palette.text.primary,
        '&.ql-blank::before': {
          color: theme.palette.text.secondary,
        },
      },
    },
  },
  stepButton: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default QuillEditor;
