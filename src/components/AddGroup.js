import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const groupList = [
  { key: 1, nameKor: '방탄소년단', nameEng: 'BTS' },
  { key: 2, nameKor: '아이콘', nameEng: 'iKon' },
  { key: 3, nameKor: '세븐틴', nameEng: 'Seventeen' },
  { key: 4, nameKor: '엔시티', nameEng: 'NCT' },
  { key: 5, nameKor: '트와이스', nameEng: 'Twice' },
  { key: 6, nameKor: '블랙핑크', nameEng: 'Blackpink' },
];

const AddGroup = ({ selectedGroups, setSelectedGroups, disabled }) => {
  const classes = useStyles();
  const [group, setGroup] = useState('');

  const addGroup = (e) => {
    if (selectedGroups.find((element) => element.key === e.target.value.key)) {
      return;
    }
    setGroup(e.target.value);
    const temp = [...selectedGroups, e.target.value];
    setSelectedGroups(temp);
  };

  const handleDelete = (itemToDelete) => {
    if (selectedGroups.length === 0) {
      setSelectedGroups([]);
      setGroup('');
      return;
    }
    setSelectedGroups((items) =>
      items.filter((item) => item.key !== itemToDelete.key)
    );
  };

  return (
    <div className={classes.parent}>
      <FormControl className={classes.select} disabled={disabled}>
        {selectedGroups.length === 0 && group === '' && (
          <InputLabel style={{ marginLeft: 10 }}>선택</InputLabel>
        )}

        <Select variant="outlined" value={group} onChange={(e) => addGroup(e)}>
          {groupList.map((item) => (
            <MenuItem
              key={item.key}
              value={item}
              disabled={selectedGroups.includes(item)}
            >
              {item.nameKor}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div>
        {selectedGroups?.map((item, index) => {
          return (
            <div className={classes.displayContainer} key={index}>
              <div className={classes.div2}>
                <CancelRoundedIcon
                  className={classes.cancelButton}
                  onClick={() => handleDelete(item)}
                />
                <Typography className={classes.label} variant="h6" gutterBottom>
                  {item.nameKor}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    flexDirection: 'column',
  },
  select: {
    width: 250,
  },

  displayContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  div2: {
    display: 'inline-flex',
    boxSizing: 'border-box',
    borderRadius: '16px',
  },
  label: {
    padding: 10,
    margin: 0,
  },
  cancelButton: {
    cursor: 'pointer',
    margin: '7px 3px 0 -5px',
  },
}));

export default AddGroup;
