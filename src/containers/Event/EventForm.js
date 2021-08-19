import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TextField,
  TextareaAutosize,
  InputAdornment,
} from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import NumberFormat from 'react-number-format';

// components
import FormComponents from 'components/Form';
import LoadingScreen from 'components/LoadingScreen';

const eventTypeOptions = [
  { value: 'cupholder', label: '컵홀더 이벤트' },
  { value: 'exhibition', label: '전시회 이벤트' },
];

const EventForm = ({ loading, form, changeForm, isEdit }) => {
  const classes = useStyles();

  const renderInfo = () => {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="center" className={classes.th}>
              혜택 구분
            </TableCell>
            <TableCell className={classes.td}>컵홀더 이벤트</TableCell>
            <TableCell align="center" className={classes.th}>
              진행 상태
            </TableCell>
            <TableCell className={classes.td}>등록</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  const renderRadio = () => {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="center" className={classes.th}>
              혜택 구분
            </TableCell>
            <TableCell>
              <FormComponents.Radio
                name="eventType"
                options={eventTypeOptions}
                value={form.eventType}
                onChange={changeForm}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          {isEdit ? renderInfo() : renderRadio()}
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  신청 기간 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <KeyboardDateTimePicker
                      variant="dialog"
                      ampm={false}
                      format="YYYY-MM-DD HH:mm"
                      value={form.startDate}
                      onChange={(e, date) => changeForm('startDate', date)}
                      disablePast
                    />
                    <Typography variant="h4" className={classes.divider}>
                      ~
                    </Typography>
                    <KeyboardDateTimePicker
                      variant="dialog"
                      ampm={false}
                      format="YYYY-MM-DD HH:mm"
                      value={form.endDate}
                      onChange={(e, date) => changeForm('endDate', date)}
                      disablePast
                    />
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  신청 조건 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <NumberFormat
                    thousandSeparator={','}
                    customInput={TextField}
                    allowLeadingZeros={false}
                    style={{ width: 250 }}
                    variant="outlined"
                    value={form.mileage}
                    onValueChange={(val) =>
                      changeForm('mileage', val.floatValue)
                    }
                    InputProps={{
                      inputProps: { maxLength: 6 },
                      endAdornment: (
                        <InputAdornment position="end">마일리지</InputAdornment>
                      ),
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  모집인원 <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <NumberFormat
                    thousandSeparator={','}
                    customInput={TextField}
                    allowLeadingZeros={false}
                    style={{ width: 250 }}
                    variant="outlined"
                    value={form.recruitsNum}
                    onValueChange={(val) =>
                      changeForm('recruitsNum', val.floatValue)
                    }
                    InputProps={{
                      inputProps: { maxLength: 6 },
                      endAdornment: (
                        <InputAdornment position="end">명</InputAdornment>
                      ),
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이벤트 유의사항(국문){' '}
                  <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={3}
                    rowsMax={7}
                    maxLength={1000}
                    name="detailsKor"
                    variant="outlined"
                    value={form.detailsKor}
                    onChange={(e) => changeForm('detailsKor', e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이벤트 유의사항(영문){' '}
                  <span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={3}
                    rowsMax={7}
                    maxLength={1000}
                    name="detailsEng"
                    variant="outlined"
                    value={form.detailsEng}
                    onChange={(e) => changeForm('detailsEng', e.target.value)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  th: {
    width: '15%',
    backgroundColor: theme.palette.action.focus,
  },
  td: {
    width: '35%',
  },
  textField: {
    width: 350,
  },
  divider: {
    margin: '10px 10px',
  },
  textarea: {
    padding: 10,
    width: '100%',
    fontSize: 18,
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    resize: 'none',
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default EventForm;
