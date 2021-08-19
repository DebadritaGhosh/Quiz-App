import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  Card,
  Dialog,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { X as XIcon, Triangle } from 'react-feather';
import LoadingScreen from './LoadingScreen';

const th = [
  { key: 'no', label: 'No.' },
  { key: 'target', label: '대상*' },
  { key: 'categoryKor', label: '카테고리명(국문)*' },
  { key: 'categoryEng', label: '카테고리명(영문)*' },
  { key: 'display', label: '노출순서' },
  { key: 'delete', label: '삭제' },
];

const targetOptions = [
  { value: 'user', label: '유저' },
  { value: 'vp', label: 'VP' },
];

const ManageCategory = ({ open, setOpen, title, loading }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState([
    {
      id: Math.floor(Math.random() * 100),
      target: { user: true, vp: true },
      categoryKor: '공지',
      categoryEng: 'Notice',
      display: '',
    },
    {
      id: Math.floor(Math.random() * 100),
      target: { user: true, vp: true },
      categoryKor: '이벤트',
      categoryEng: 'Event',
      display: '',
    },
    {
      id: Math.floor(Math.random() * 100),
      target: { user: false, vp: true },
      categoryKor: '정책',
      categoryEng: 'Policy',
      display: '',
    },
    {
      id: Math.floor(Math.random() * 100),
      target: { user: true, vp: true },
      categoryKor: '기타',
      categoryEng: 'Etc',
      display: '',
    },
    {
      id: Math.floor(Math.random() * 100),
      target: { user: true, vp: false },
      categoryKor: '앱이용',
      categoryEng: 'APP',
      display: '',
    },
  ]);

  const renderWithRedStar = (item) => {
    return (
      <p>
        {item.slice(0, -1)}
        <span className={classes.redStar}>*</span>
      </p>
    );
  };

  const handleTargetChange = (e, item) => {
    let newItem = item;
    newItem.target[e.target.value] = !item.target[e.target.value];
    let index = categories.findIndex((x) => x.id === item.id);
    if (index === -1) alert('There is no such id');
    else {
      setCategories([
        ...categories.slice(0, index),
        newItem,
        ...categories.slice(index + 1),
      ]);
    }
  };

  const handleInputChange = (e, item) => {
    let newItem = item;
    newItem[e.target.name] = e.target.value;
    let index = categories.findIndex((x) => x.id === item.id);
    if (index === -1) alert('There is no such id');
    else {
      setCategories([
        ...categories.slice(0, index),
        newItem,
        ...categories.slice(index + 1),
      ]);
    }
  };

  const reorderCategories = (direction, item) => {
    let index = categories.findIndex((x) => x.id === item.id);
    let newCategories = categories;
    let temp = categories[index];
    if (direction === 'up') {
      newCategories[index] = newCategories[index - 1];
      newCategories[index - 1] = temp;
    } else {
      newCategories[index] = newCategories[index + 1];
      newCategories[index + 1] = temp;
    }
    setCategories([...newCategories]);
  };

  const addNewCategory = () => {
    const newRow = {
      id: Math.floor(Math.random() * 100),
      target: { user: false, vp: false },
      categoryKor: '',
      categoryEng: '',
      display: '',
    };
    setCategories([...categories, newRow]);
  };

  const deleteCategory = (item) => {
    let temp = categories.filter((el) => el.id !== item.id);
    setCategories(temp);
  };

  return (
    <Dialog maxWidth="md" onClose={() => setOpen(false)} open={open}>
      {loading && <LoadingScreen />}
      {title && (
        <div className={classes.root}>
          <Typography variant="h3" className={classes.modalTitle}>
            {title}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={() => setOpen(false)}
          >
            <XIcon />
          </Button>
        </div>
      )}

      <div className={classes.container}>
        <Card>
          <Box minWidth={700}>
            <Table>
              <colgroup>
                <col width="5%" />
                <col width="15%" />
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <TableHead className={classes.headRow}>
                <TableRow>
                  {th.map((item) => {
                    return (
                      <TableCell
                        key={item.key}
                        className={classes.headCell}
                        align="center"
                      >
                        {item.label.slice(-1) !== '*' ? (
                          <p>{item.label}</p>
                        ) : (
                          renderWithRedStar(item.label)
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
            </Table>
            <Table>
              <TableBody>
                {categories?.map((category, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="center" className={classes.bodyCell}>
                        {index + 1}
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <div
                          aria-label="target"
                          style={{ display: 'flex', flexDirection: 'row' }}
                        >
                          <FormControlLabel
                            value={targetOptions[0].value}
                            control={<Checkbox />}
                            label={targetOptions[0].label}
                            checked={category.target.user}
                            onChange={(e) => handleTargetChange(e, category)}
                          />
                          <FormControlLabel
                            value={targetOptions[1].value}
                            control={<Checkbox />}
                            label={targetOptions[1].label}
                            checked={category.target.vp}
                            onChange={(e) => handleTargetChange(e, category)}
                          />
                        </div>
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <TextField
                          variant="outlined"
                          name="categoryKor"
                          size="small"
                          value={category.categoryKor}
                          onChange={(e) => handleInputChange(e, category)}
                        />
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <TextField
                          variant="outlined"
                          name="categoryEng"
                          size="small"
                          value={category.categoryEng}
                          onChange={(e) => handleInputChange(e, category)}
                        />
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <div
                          aria-label="displayOrder"
                          className={classes.displayOrderContainer}
                        >
                          <Button
                            size="small"
                            name="up"
                            disabled={index === 0}
                            onClick={() => reorderCategories('up', category)}
                          >
                            <Triangle />
                          </Button>
                          <Button
                            size="small"
                            name="down"
                            disabled={index === categories.length - 1}
                            onClick={() => reorderCategories('down', category)}
                          >
                            <Triangle className={classes.iconReverse} />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell align="center" className={classes.bodyCell}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => deleteCategory(category)}
                        >
                          <XIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Card>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.buttons}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => addNewCategory()}
          >
            {'추가'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => console.log(categories)}
          >
            {'저장'}
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  headRow: { backgroundColor: theme.palette.action.focus },
  headCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
  bodyCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    '& > button': {
      width: 100,
    },
  },
  redStar: {
    fontSize: 16,
    color: 'red',
  },
  displayOrderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconReverse: {
    transform: 'rotate(180deg)',
  },
}));

export default ManageCategory;
