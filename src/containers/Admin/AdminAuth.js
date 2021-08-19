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
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
// utils
import { menuOptions, rows } from 'utils/user/adminAuthorityUtils';

const th = [
  { key: 'menu', label: '대메뉴' },
  { key: 'submenu', label: '하위 메뉴' },
];

const AdminAuth = ({ adminAuth, setAdminAuth }) => {
  const classes = useStyles();

  const handleAuthChange = (e) => {
    setAdminAuth({
      ...adminAuth,
      [e.target.value]: e.target.checked ? 1 : 0,
    });
  };

  return (
    <Card className={classes.wrapper}>
      <Box minWidth={700}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="30%" />
            <col width="*" />
          </colgroup>
          <TableHead className={classes.tableHead}>
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
            {menuOptions.map((menu, index) => (
              <TableRow key={menu.value}>
                <TableCell align="center">{menu.label}</TableCell>
                <TableCell align="left" className={classes.tableCellLeft}>
                  {rows[index].map((subMenu) => {
                    return (
                      <FormControlLabel
                        key={subMenu.value}
                        className={classes.smallMarginLeft}
                        checked={adminAuth[subMenu.value] === 1}
                        control={<Checkbox />}
                        value={subMenu.value}
                        label={subMenu.label}
                        onChange={(e) => handleAuthChange(e)}
                      />
                    );
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing(1),
  },
  table: {
    tableLayout: 'fixed',
  },
  smallMarginLeft: {
    marginLeft: '10px',
  },
  tableHead: {
    backgroundColor: theme.palette.action.focus,
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

export default AdminAuth;
