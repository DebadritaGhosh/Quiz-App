import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  List,
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import { THEMES } from 'constants/index';
import Settings from './Settings';
import Logout from './Logout';
import Logo from 'components/Logo';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MyInfo from './MyInfo';
function TopBar({ adminType, userName, className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <div className={classes.logo}>
              <Logo />
            </div>
          </RouterLink>
        </Hidden>
        <Box ml={2} flexGrow={1} />

        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <AccountCircleIcon className={classes.avatar} />
            </ListItemIcon>
            <ListItemText primary={`Admin01 | 홍길동 님`} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem>
                <MyInfo setOpen={setOpen} />
              </ListItem>
              {/* <ListItem>
                <Settings />
              </ListItem> */}
              <ListItem>
                <Logout setOpen={setOpen} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...(theme.name === THEMES.LIGHT
      ? {
          boxShadow: 'none',
          backgroundColor: theme.palette.primary.main,
        }
      : {}),
    ...(theme.name === THEMES.ONE_DARK
      ? {
          backgroundColor: theme.palette.background.default,
        }
      : {}),
  },
  toolbar: {
    minHeight: 64,
  },
  avatar: {
    ...(theme.name === THEMES.LIGHT
      ? {
          color: '#66ffdf',
        }
      : {}),
    ...(theme.name === THEMES.ONE_DARK
      ? {
          color: theme.palette.primary.main,
        }
      : {}),
    ...(theme.name === THEMES.UNICORN
      ? {
          color: 'white',
        }
      : {}),
  },
}));

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
