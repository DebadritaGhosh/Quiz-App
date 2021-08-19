import React from 'react';
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  Card,
  Typography,
} from '@material-ui/core';
import { createAdminAuthData } from 'utils/user/adminAuthorityUtils';

const th = [
  { key: 'menu', label: '대메뉴', sortable: false },
  { key: 'submenu', label: '하위 메뉴', sortable: false },
];

const AdminAuthority = ({ adminDetails }) => {
  const classes = useStyles();
  const adminAuthorityExample = {
    userManage: 1,
    vpManage: 1,
    adminManage: 1,
    eventManage: 1,
    artistManage: 1,
    metadataManage: 1,
    popupManage: 1,
    policyManage: 1,
    noticeboardManage: 1,
    faqManage: 1,
    qnaManage: 1,
    statisticsManage: 1,
  };
  const data = createAdminAuthData(adminAuthorityExample);
  return (
    <>
      <Typography variant="h4" color="textPrimary" className={classes.title}>
        권한 설정
      </Typography>
      <Card className={classes.wrapper}>
        <Box minWidth={700}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.th}>
              <TableRow>
                {th.map((item) => {
                  return (
                    <TableCell
                      key={item.key}
                      align="center"
                      style={{ fontSize: 16, fontWeight: 'bold' }}
                      className={classes.tableCell}
                    >
                      {item.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.menu}>
                  <TableCell align="center">{row.menu}</TableCell>
                  <TableCell align="center" className={classes.tableCellLeft}>
                    {row.subMenu !== '' ? row.subMenu : '---'}
                  </TableCell>
                </TableRow>
              ))}
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

  table: {
    tableLayout: 'fixed',
  },

  th: {
    backgroundColor: theme.palette.action.focus,
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  tableCell: {
    borderRightStyle: 'solid',
    borderRightColor: theme.palette.action.focus,
  },
  tableCellLeft: {
    borderLeftStyle: 'solid',
    borderLeftColor: theme.palette.action.focus,
  },
}));

export default AdminAuthority;
