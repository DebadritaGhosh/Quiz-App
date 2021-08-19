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
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
// components
import LoadingScreen from 'components/LoadingScreen';
import FormComponents from 'components/Form';
import { KeyboardDatePicker } from '@material-ui/pickers';
import ImageUpload from 'components/ImageUpload';
import AddGroup from 'components/AddGroup';

const typeOptions = [
  { value: 'groupSolo', label: '그룹/개인' },
  { value: 'group', label: '그룹' },
  { value: 'solo', label: '개인' },
];

const serviceTypeOptions = [
  { value: 'now', label: '서비스중' },
  { value: 'later', label: '서비스 준비중' },
];

const ArtistForm = ({
  loading,
  form,
  changeForm,
  image,
  setImage,
  selectedGroups,
  setSelectedGroups,
}) => {
  const classes = useStyles();

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
                <TableCell align="center">아티스트명(국문)</TableCell>
                <TableCell>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    name="nameKor"
                    value={form.nameKor}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
                <TableCell align="center">
                  아티스트명(영문)<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    name="nameEng"
                    value={form.nameEng}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  소속 구분<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <FormComponents.Radio
                    options={typeOptions}
                    name="type"
                    value={form.type}
                    onChange={changeForm}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  그룹명<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <AddGroup
                    selectedGroups={selectedGroups}
                    setSelectedGroups={setSelectedGroups}
                    disabled={form.type === 'solo'}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  생년월일<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <KeyboardDatePicker
                    format="YYYY-MM-DD"
                    name="birthdate"
                    inputVariant="outlined"
                    value={form.birthdate}
                    onChange={(date) => changeForm('birthdate', date)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  이미지<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <ImageUpload image={image} setImage={setImage} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.th}>
                  서비스 상태<span className={classes.redStar}>*</span>
                </TableCell>
                <TableCell>
                  <RadioGroup
                    className={classes.serviceType}
                    row
                    name="serviceType"
                    options={serviceTypeOptions}
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                  >
                    <FormControlLabel
                      className={classes.subscriptionField}
                      value={serviceTypeOptions[0].value}
                      control={<Radio />}
                      checked={form.serviceType === 'now'}
                      label={serviceTypeOptions[0].label}
                    />
                    <div className={classes.openDate}>
                      <FormControlLabel
                        className={classes.subscriptionField}
                        value={serviceTypeOptions[1].value}
                        control={<Radio />}
                        label={serviceTypeOptions[1].label}
                      />
                      <Typography variant="h5"> ➡️ 오픈예정일</Typography>
                      <KeyboardDatePicker
                        className={classes.datePicker}
                        disabled={form.serviceType !== 'later'}
                        format="YYYY-MM-DD"
                        name="serviceDate"
                        inputVariant="outlined"
                        value={form.serviceDate}
                        onChange={(date) => changeForm('serviceDate', date)}
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
  serviceType: {
    display: 'flex',
    flexDirection: 'column',
  },
  openDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    marginLeft: 15,
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default ArtistForm;
