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
                    기간검색 - 등록일
                  </Typography>
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
                    키워드 검색
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.TextField
                    style={{ width: 350 }}
                    name="keyword"
                    value={filter.form.keyword}
                    onChange={filter.changeForm}
                    inputProps={{ maxLength: 30 }}
                    fullWidth={false}
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
              type="submit"
              color="primary"
              variant="contained"
              onClick={() => console.log('filter => ', filter)}
            >
              검색
            </Button>
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
          </Box>
        </TableContainer>
      </form>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing(1),
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
}));

export default Filter;
