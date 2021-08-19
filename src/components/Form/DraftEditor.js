import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// utils
import {
  convertDraftToHtml,
  convertDraftToText,
  convertHtmlToDraft,
  convertTextToDraft,
} from 'utils';

const { REACT_APP_API } = process.env;

const DraftEditorComponent = ({
  useHtml,
  disabled,
  initializeFlag,
  onChange,
  name,
  value,
}) => {
  const classes = useStyles();
  const [draftValue, setDraftValue] = useState(EditorState.createEmpty());

  useEffect(() => {
    setDraftValue(
      useHtml ? convertHtmlToDraft(value) : convertTextToDraft(value)
    );
  }, [initializeFlag]);

  return (
    <Editor
      readOnly={disabled}
      stripPastedStyles
      wrapperClassName={clsx(classes.root)}
      toolbarClassName={classes.toolbar}
      editorClassName={classes.editor}
      onEditorStateChange={(newDraftValue) => {
        setDraftValue(newDraftValue);
        onChange(
          name,
          useHtml
            ? convertDraftToHtml(newDraftValue)
            : convertDraftToText(newDraftValue)
        );
      }}
      toolbarHidden={!useHtml || disabled}
      editorState={draftValue}
      toolbar={{
        options: ['image', 'link', 'history'],
        image: {
          urlEnabled: false,
          uploadEnabled: true,
          previewImage: true,
          alignmentEnabled: false,
          uploadCallback: (file) => {
            return axios
              .post('/upload/image', { image: file })
              .then(({ data }) => {
                const url = `${REACT_APP_API}/${data.image}`;

                return new Promise((resolve, reject) => {
                  resolve({ data: { link: url } });
                });
              })
              .then((resolve) => {
                return resolve;
              })
              .catch((err) => console.log(err));
          },
        },
      }}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    border: '1px solid #fff',

    '& .rdw-option-wrapper': {
      width: 26,
      height: 26,
      padding: 6,
      backgroundColor: '#fff',
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
    '& .rdw-option-active': {
      boxShadow: 'none',
      backgroundColor: theme.palette.action.selected,
    },
    '& .rdw-dropdown-wrapper': {
      boxShadow: 'none',
      background: '#fff',
      color: '#000',
    },
    '& .rdw-dropdown-optionwrapper': {
      overflowY: 'auto',
      boxShadow: theme.shadows[10],
      padding: theme.spacing(1),
    },
  },
  toolbar: {
    marginBottom: '0 !important',
    borderTop: 'none !important',
    borderRight: 'none !important',
    borderLeft: 'none !important',
    background: 'transparent !important',
  },
  editor: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
    '& .public-DraftEditor-content': {
      minHeight: 300,
    },
    '& .public-DraftStyleDefault-block': {
      margin: '0 !important',
    },
  },
}));

export default DraftEditorComponent;
