import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Typography,
} from '@material-ui/core';
// components
import FormComponents from 'components/Form';

const searchTypeOptions = [
  { label: '가입일', value: 'createdDate' },
  { label: '신청일', value: 'applicationDate' },
];

const benefitOptions = [
  { label: '컵홀더 이벤트', value: 'cupholder' },
  { label: '전시회 이벤트', value: 'exhibition' },
];

const statusOptions = [
  { label: '전체', value: 'all' },
  { label: '등록', value: 'created' },
  { label: '모집중', value: 'recruiting' },
  { label: '모집완료', value: 'recruitFinished' },
  { label: '종료', value: 'terminated' },
];

const Filter = ({ pagination, filter }) => {
  const classes = useStyles();

  return (
    <Card className={classes.wrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pagination.setFilter(filter.form);
        }}
      >
        <TableContainer>
          <Table className={classes.table}>
            <TableBody>
              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    기간검색
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.Select
                    options={searchTypeOptions}
                    name="searchType"
                    value={filter.form.searchType}
                    onChange={filter.changeForm}
                    fullWidth={true}
                  />
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.DatePicker
                    useUpTo
                    onChange={filter.changeForm}
                    name="createdAtStart"
                    upToName="createdAtEnd"
                    value={filter.form.createdAtStart}
                    upToValue={filter.form.createdAtEnd}
                  />
                </TableCell>
              </TableRow>
              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    혜택 구분
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.Checkbox
                    name="benefit"
                    options={benefitOptions}
                    value={filter.form.benefit}
                    onChange={filter.changeForm}
                  />
                </TableCell>
              </TableRow>
              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    회원상태
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.Radio
                    name="status"
                    options={statusOptions}
                    value={filter.form.status}
                    onChange={filter.changeForm}
                  />
                </TableCell>
              </TableRow>
              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    키워드 검색
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.TextField
                    name="searchTerm"
                    value={filter.form.searchTerm}
                    onChange={filter.changeForm}
                    inputProps={{ maxLength: 30 }}
                    fullWidth={true}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box
            className={classes.buttons}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                filter.resetForm();
                pagination.resetFilter();
              }}
            >
              초기화
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => console.log('filter => ', filter)}
            >
              검색
            </Button>
          </Box>
        </TableContainer>
      </form>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  buttons: {
    padding: theme.spacing(0.5),
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
  noLine: {
    borderBottom: 'none',
  },
  datePicker: {
    width: 260,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default Filter;
