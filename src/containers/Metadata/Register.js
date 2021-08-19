import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import useForm from 'hooks/useForm';
import FormComponents from 'components/Form';
import AccessoryForm from './AccessoryForm';
import ConceptForm from './ConceptForm';
import HairColorForm from './HairColorForm';

const metadataOptions = [
  { value: 'accessory', label: '액세서리' },
  { value: 'concept', label: '컨셉' },
  { value: 'hairColor', label: '헤어컬러' },
];

const RegisterContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, changeForm } = useForm({
    type: '',
    nameKor: '',
    nameEng: '',
    colorCode: '',
  });

  useEffect(() => {
    if (localStorage.getItem('metadataType')) {
      changeForm('type', localStorage.getItem('metadataType'));
      localStorage.removeItem('metadataType');
    }
  }, []);

  const renderTitle = () => {
    return form.type === 'accessory'
      ? '액세서리 신규등록'
      : form.type === 'concept'
      ? '컨셉 신규등록'
      : form.type === 'hairColor'
      ? '헤어 컬러 신규등록'
      : '';
  };

  return (
    <>
      <Typography variant="h3" color="textPrimary" className={classes.title}>
        {renderTitle()}
      </Typography>
      <Card>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center" className={classes.th}>
                메타데이터 구분
              </TableCell>
              <TableCell className={classes.td}>
                <FormComponents.Radio
                  name="type"
                  options={metadataOptions}
                  value={form.type}
                  onChange={changeForm}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      {form.type === 'accessory' && (
        <AccessoryForm form={form} changeForm={changeForm} />
      )}
      {form.type === 'concept' && (
        <ConceptForm form={form} changeForm={changeForm} />
      )}
      {form.type === 'hairColor' && (
        <HairColorForm form={form} changeForm={changeForm} />
      )}
      <Box className={classes.buttons} pt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/metadata')}
        >
          목록
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(form)}
        >
          저장
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(3),
  },
  title2: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > button': {
      margin: theme.spacing(0.5),
      width: 150,
    },
  },
  th: {
    width: '15%',
    backgroundColor: theme.palette.action.focus,
  },
  td: {
    width: '35%',
  },
}));

export default RegisterContainer;
