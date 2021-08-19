import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

// components
import LoadingScreen from 'components/LoadingScreen';
import FormComponents from 'components/Form';
import ImageUpload from 'components/ImageUpload';
import QuillEditor from 'components/QuillEditor';

const registerStatusoptions = [
  { value: 'active', label: '활성' },
  { value: 'inactive', label: '비활성' },
];

const orderOfExposureOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
];

const registerTypeOptions = [
  { value: 'image', label: '이미지' },
  { value: 'text', label: '텍스트' },
];

const popupLinkOptions = [
  { value: 'noLink', label: '없음' },
  { value: 'notice', label: '공지사항' },
  { value: 'external', label: '외부링크' },
];

const PopupForm = ({ loading, form, changeForm, image, setImage }) => {
  const classes = useStyles();

  const renderRegisterType = () => {
    if (form.registerType === 'image') {
      return (
        <TableRow>
          <TableCell align="center" className={classes.th}>
            이미지<span className={classes.redStar}>*</span>
          </TableCell>
          <TableCell>
            <ImageUpload image={image} setImage={setImage} />
            <Typography color="textSecondary" variant="body2">
              가로 308 x 세로 370 px 이미지를 등록해주세요.
            </Typography>
          </TableCell>
        </TableRow>
      );
    } else {
      return (
        <>
          <TableRow>
            <TableCell align="center" className={classes.th}>
              팝업 내용(국문)<span className={classes.redStar}>*</span>
            </TableCell>
            <TableCell>
              <Paper component={Box} mt={1}>
                <QuillEditor
                  className={classes.editor}
                  value={form.detailsKor}
                  onChange={(value) => changeForm('detailsKor', value)}
                />
              </Paper>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" className={classes.th}>
              팝업 내용(영문)<span className={classes.redStar}>*</span>
            </TableCell>
            <TableCell>
              <Paper component={Box} mt={1}>
                <QuillEditor
                  className={classes.editor}
                  value={form.detailsEng}
                  onChange={(value) => changeForm('detailsEng', value)}
                />
              </Paper>
            </TableCell>
          </TableRow>
        </>
      );
    }
  };

  return (
    <>
      <Card className={classes.root}>
        {loading && <LoadingScreen />}
        <Box minWidth={700}>
          <Table>
            <colgroup>
              <col className={classes.th} />
              <col className={classes.td} />
              <col className={classes.th} />
              <col className={classes.td} />
            </colgroup>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  등록 상태<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <FormComponents.Radio
                    options={registerStatusoptions}
                    name="registerStatus"
                    value={form.registerStatus}
                    onChange={changeForm}
                  />
                </TableCell>
                <TableCell align="center">
                  노출 순서<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <FormComponents.Select
                    disabled={form.registerStatus === 'inactive'}
                    options={orderOfExposureOptions}
                    placeholder="선택"
                    fullWidth={true}
                    variant="outlined"
                    name="orderOfExposure"
                    value={form.orderOfExposure}
                    onChange={changeForm}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  팝업명<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    name="title"
                    value={form.title}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  게시기간<span className={classes.redStar}>*</span>
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
                    />
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  등록 구분<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <FormComponents.Radio
                    options={registerTypeOptions}
                    name="registerType"
                    value={form.registerType}
                    onChange={changeForm}
                  />
                </TableCell>
              </TableRow>
              {renderRegisterType()}
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  서비스 상태<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <RadioGroup
                    className={classes.popupLinkContainer}
                    row
                    name="popupLink"
                    options={popupLinkOptions}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  >
                    <FormControlLabel
                      className={classes.subscriptionField}
                      value={popupLinkOptions[0].value}
                      control={<Radio />}
                      checked={form.popupLink === 'noLink'}
                      label={popupLinkOptions[0].label}
                    />
                    <div className={classes.popupLinkOption}>
                      <FormControlLabel
                        className={classes.subscriptionField}
                        value={popupLinkOptions[1].value}
                        control={<Radio />}
                        checked={form.popupLink === 'notice'}
                        label={popupLinkOptions[1].label}
                      />
                    </div>
                    <div className={classes.popupLinkOption}>
                      <FormControlLabel
                        className={classes.subscriptionField}
                        value={popupLinkOptions[2].value}
                        control={<Radio />}
                        checked={form.popupLink === 'external'}
                        label={popupLinkOptions[2].label}
                      />
                      <TextField
                        className={classes.externalLink}
                        size="small"
                        variant="outlined"
                        name="externalLink"
                        placeholder="http://example.com"
                        disabled={form.popupLink !== 'external'}
                        value={form.externalLink}
                        onChange={(e) =>
                          changeForm(e.target.name, e.target.value)
                        }
                      />
                    </div>
                  </RadioGroup>
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
  popupLinkContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  popupLinkOption: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    marginLeft: 15,
  },
  divider: {
    margin: '10px 10px',
  },
  editor: {
    padding: 2,
    '& .ql-editor': {
      maxWidth: '100%',
      minHeight: 250,
      overflowWrap: 'break-word',
      wordWrap: 'break-word',
      hyphens: 'auto',
    },
  },
  externalLink: {
    width: 350,
    marginLeft: 15,
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default PopupForm;
