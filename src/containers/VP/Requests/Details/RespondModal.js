import React from 'react';
import {
  makeStyles,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  TextField,
} from '@material-ui/core';

// components
import FormComponents from 'components/Form';
import ModalContainer from 'components/ModalContainer';
import AddArtist from 'components/AddArtist';

const answerOptions = [
  { value: 'accept', label: '승인' },
  { value: 'reject', label: '반려' },
];

const RespondModal = ({
  open,
  onClose,
  onApply,
  form,
  changeForm,
  selectedArtists,
  setSelectedArtists,
}) => {
  const classes = useStyles();

  return (
    <ModalContainer open={open} onClose={onClose} modalTitle="아티스트 지정">
      <div className={classes.queryField}>
        <Card>
          <Box minWidth={700}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="center" className={classes.th2}>
                    신청 결과
                  </TableCell>
                  <TableCell>
                    <FormComponents.Radio
                      name="result"
                      options={answerOptions}
                      value={form.result}
                      onChange={changeForm}
                    />
                  </TableCell>
                </TableRow>
                {form.result === 'accept' ? (
                  <>
                    <TableRow>
                      <TableCell align="center" className={classes.th2}>
                        신청 아티스트
                      </TableCell>
                      <TableCell>{'BTS > JiMin'}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center" className={classes.th2}>
                        설정 아티스트 <span className={classes.redStar}>*</span>
                      </TableCell>
                      <TableCell className={classes.artistSelect}>
                        <AddArtist
                          selectedArtists={selectedArtists}
                          setSelectedArtists={setSelectedArtists}
                        />
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell align="center" className={classes.th2}>
                        반려 사유 <span className={classes.redStar}>*</span>
                      </TableCell>
                      <TableCell>
                        <TextField
                          className={classes.textField}
                          variant="outlined"
                          name="reason"
                          value={form.reason}
                          onChange={(e) =>
                            changeForm(e.target.name, e.target.value)
                          }
                        />
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </Box>
        </Card>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.buttons}
        >
          <Button variant="contained" size="small" onClick={onClose}>
            {'취소'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onApply}
          >
            {'완료'}
          </Button>
        </Box>
      </div>
    </ModalContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  queryField: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  textField: {
    width: 500,
  },
  th2: {
    width: '30%',
    backgroundColor: theme.palette.action.focus,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    '& > button': {
      margin: theme.spacing(0.5),
    },
  },
  artistSelect: {
    display: 'flex',
    flexDirection: 'row',
  },
  redStar: {
    fontSize: 18,
    color: 'red',
  },
}));

export default RespondModal;
