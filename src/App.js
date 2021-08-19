import React, { useEffect } from 'react';
import {
  jssPreset,
  createStyles,
  makeStyles,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';
import { useDispatch } from 'react-redux';

// date picker
import 'moment/locale/ko';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Routes from './Routes';

// assets
import { createTheme } from 'assets/theme';

// hooks
import useSettings from 'hooks/useSettings';

// reducers
import { loginAuto } from 'reducers/auth';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  useStyles();
  const dispatch = useDispatch();
  const { settings } = useSettings();

  useEffect(() => {
    dispatch(loginAuto());
  }, []);

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale="ko">
          <SnackbarProvider maxSnack={1}>
            <Routes />
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  })
);

export default App;
