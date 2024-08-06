import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SpecificationsTable({ specifications, variantName }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>{variantName} Specifications</caption>
        <TableBody>
          {specifications.map((spec, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {spec.parameter}
              </TableCell>
              <TableCell align="right">{spec.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
