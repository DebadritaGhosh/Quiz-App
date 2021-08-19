import axios from 'axios';
import moment from 'moment';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import jwt_decode from 'jwt-decode';

export const setAuthorization = (accessToken) => {
  axios.defaults.headers.authorization = accessToken;
};

export const queryStringMaker = (object) => {
  const queryArray = [];
  for (let key in object) {
    if (
      object[key] !== null &&
      object[key] !== undefined &&
      object[key] !== ''
    ) {
      queryArray.push(`${key}=${object[key]}`);
    }
  }

  return encodeURI(queryArray.join('&'), 'UTF-8');
};

export const convertGender = (gender) => {
  switch (gender) {
    case 'M':
      return '남성';
    case 'F':
      return '여성';
    default:
      return '';
  }
};

export const dateTimePrettier = (date) => {
  return moment(date)
    .hours(moment(date).hours() + 9)
    .format('YYYY-MM-DD HH:mm');
};

// 텍스트를 draft.js 형태의 데이터로 변환
export const convertTextToDraft = (text, selection) => {
  return EditorState.createWithContent(ContentState.createFromText(text));
};

// html을 draft.js 형태의 데이터로 변환
export const convertHtmlToDraft = (html, selection) => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;

  return EditorState.createWithContent(
    ContentState.createFromBlockArray(contentBlocks, entityMap)
  );
};

// draft.js 형태의 데이터를 텍스트로 변환
export const convertDraftToText = (draft) => {
  return draft.getCurrentContent().getPlainText();
};

// draft.js 형태의 데이터를 html로 변환
export const convertDraftToHtml = (draft) => {
  return draftToHtml(convertToRaw(draft.getCurrentContent()));
};

// html을 텍스트로 변환
export const convertHtmlToText = (html) => {
  const blocksFromHtml = convertHtmlToDraft(html);
  return blocksFromHtml.getCurrentContent().getPlainText();
};

export const bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const downloadThroughUrl = (url) => {
  axios({
    method: 'get',
    url,
    responseType: 'blob',
  }).then((res) => {
    const fileName = url.split('/').pop();
    if (window.navigator.msSaveOrOpenBlob) {
      // IE 11
      window.navigator.msSaveOrOpenBlob(res.data, fileName);
    } else {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  });
};

export const jwtDecode = (token) => {
  return jwt_decode(token.substring(7, token.length));
};
