import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IProps } from '../../common/types/student.types';
import DeleteBtn from '../../Buttons/DeleteBtn';
import ViewBtn from '../../Buttons/ViewBtn';
import StatusSwitch from '../../Buttons/StatusSwitch';

const HomeTablet: React.FC<IProps> = ({ data }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Todo Title</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {item.title}
            </TableCell>
            <TableCell align="right">{item.description}</TableCell>
            <TableCell align="right">
              <ViewBtn itemId={item._id} />
              <DeleteBtn itemId={item._id} />
              <StatusSwitch itemId={item._id} checked={item.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default HomeTablet;
