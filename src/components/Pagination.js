import React from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  Button,
  Select,
  MenuItem,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronsLeft as ChevronsLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronsRight as ChevronsRightIcon,
} from 'react-feather';

const Pagination = ({
  onChangeLimit,
  onChangeSkip,
  limit,
  skip,
  totalCount,
  limitOptions,
}) => {
  const classes = useStyles();

  const buttonLimit = 10;
  const currentPage = skip / limit + 1;
  const totalPage = Math.ceil(totalCount / limit);
  const start = Math.floor((currentPage - 1) / buttonLimit) * buttonLimit + 1;
  const rest =
    start + (buttonLimit - 1) < totalPage
      ? buttonLimit - 1
      : (totalPage - start) % buttonLimit;
  const btns = [];
  for (let i = start; i <= start + rest; i++) {
    btns.push(
      <Button
        key={i}
        variant={currentPage === i ? 'contained' : 'text'}
        color={currentPage === i ? 'primary' : 'default'}
        onClick={() => {
          if (currentPage === i) {
            return;
          }
          onChangeSkip((i - 1) * limit);
        }}
      >
        {i}
      </Button>
    );
  }
  const startNumber = totalCount > 0 ? (currentPage - 1) * limit + 1 : 0;
  const endNumber =
    limit * currentPage > totalCount ? totalCount : limit * currentPage;

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" p={1}>
      <Typography>
        {startNumber} ~ {endNumber} of {totalCount}
      </Typography>
      <Box className={classes.paginateButtons}>
        <Button disabled={currentPage === 1} onClick={() => onChangeSkip(0)}>
          <ChevronsLeftIcon size={20} />
        </Button>
        <Button
          disabled={currentPage === 1}
          onClick={() => onChangeSkip((currentPage - 2) * limit)}
        >
          <ChevronLeftIcon size={20} />
        </Button>
        {btns}
        <Button
          disabled={currentPage === totalPage || totalPage <= 1}
          onClick={() => onChangeSkip(currentPage * limit)}
        >
          <ChevronRightIcon size={20} />
        </Button>
        <Button
          disabled={currentPage === totalPage || totalPage <= 1}
          onClick={() => onChangeSkip((totalPage - 1) * limit)}
        >
          <ChevronsRightIcon size={20} />
        </Button>
      </Box>
      <FormControl>
        <Select
          onChange={(e) => {
            onChangeLimit(e.target.value);
          }}
          value={limit}
        >
          {limitOptions.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>최대 개수</FormHelperText>
      </FormControl>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  paginateButtons: {
    '& > button': {
      margin: theme.spacing(0.5),
      minWidth: 40,
    },
  },
}));

export default Pagination;
