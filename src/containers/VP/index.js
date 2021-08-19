import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tabs, Tab, Box } from '@material-ui/core';

//containers
import VPRequests from './Requests/index';
import VPUsers from './VPUsers/index';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box pt={1}>{children}</Box>}
    </div>
  );
};

export default function GeneralFilter() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (Number(localStorage.getItem('tabIndex')) === 1) {
      setValue(1);
    }
    localStorage.removeItem('tabIndex');
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs className={classes.tabs} value={value} onChange={handleChange}>
        <Tab label="VP신청목록" />
        <Tab label="VP목록" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <VPRequests />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VPUsers />
      </TabPanel>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    justifyContent: 'space-between',
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
