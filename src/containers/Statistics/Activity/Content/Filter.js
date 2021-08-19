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
import artistList from 'utils/mockArtistList';
// components
import FormComponents from 'components/Form';

const intervalOptions = [
  { label: '일간', value: 'daily' },
  { label: '월간', value: 'monthly' },
  { label: '연간', value: 'annual' },
];

const activityTypeOptions = [
  { label: '전체', value: 'all' },
  { label: '마이앨범 담기', value: 'myAlbum' },
  { label: '다운로드', value: 'download' },
  { label: '좋아요', value: 'like' },
];

const countryOptions = [
  { value: 'korea', label: 'Korea' },
  { value: 'usa', label: 'USA' },
  { value: 'japan', label: 'Japan' },
];

const Filter = ({ pagination, filter }) => {
  const classes = useStyles();

  const selectedGroup =
    artistList?.length > 0 &&
    artistList.find((item) => item?.name === filter.form.group);
  const memberOptions = selectedGroup?.options || [
    { value: '', name: 'Please Select Group!' },
  ];

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
                    기간 검색
                  </Typography>
                </TableCell>
                <div className={classes.tempContainer}>
                  <TableCell className={classes.noLine}>
                    <FormComponents.Radio
                      options={intervalOptions}
                      name="interval"
                      value={filter.form.interval}
                      onChange={filter.changeForm}
                    />
                  </TableCell>
                  <TableCell className={classes.noLine}>
                    <FormComponents.DatePicker
                      useUpTo
                      name="startDate"
                      upToName="endDate"
                      value={filter.form.startDate}
                      upToValue={filter.form.endDate}
                      onChange={filter.changeForm}
                    />
                  </TableCell>
                </div>
              </TableRow>

              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    활동 선택
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.Radio
                    options={activityTypeOptions}
                    name="activityType"
                    value={filter.form.activityType}
                    onChange={filter.changeForm}
                  />
                </TableCell>
              </TableRow>

              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    국가 선택
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <FormComponents.Select
                    options={countryOptions}
                    name="country"
                    value={filter.form.country}
                    onChange={filter.changeForm}
                  />
                </TableCell>
              </TableRow>

              <TableRow align="left">
                <TableCell className={classes.noLine}>
                  <Typography variant="h4" color="textSecondary">
                    아티스트 선택
                  </Typography>
                </TableCell>
                <TableCell className={classes.noLine}>
                  <div className={classes.artistSelect}>
                    <FormComponents.ArtistSelect
                      name="group"
                      options={artistList}
                      value={filter.form.group}
                      onChange={(e) =>
                        filter.changeForm('group', e.target.value)
                      }
                    />
                    <FormComponents.ArtistSelect
                      name="member"
                      options={memberOptions}
                      value={filter.form.membermember}
                      onChange={(e) =>
                        filter.changeForm('member', e.target.value)
                      }
                    />
                  </div>
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
  artistSelect: {
    display: 'flex',
    flexDirection: 'row',
  },
  tempContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default Filter;
