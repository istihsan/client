import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Paper component for custom background color
const CustomPaper = styled(Paper)({
  backgroundColor: '#FCC783',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  overflow: 'hidden',
});

// Styled Table component to center the table
const CenteredTable = styled(Table)({
  maxWidth: 1550,
  margin: '0 auto', // Center the table horizontally
});

export default function SpecificationsTable({ specifications, variantName }) {
  if (!specifications || !Array.isArray(specifications)) {
    return <div>No specifications available.</div>;
  }

  return (
    <CustomPaper>
      <CenteredTable aria-label="caption table">
        <caption>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {variantName} Specifications
          </Typography>
        </caption>
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
      </CenteredTable>
    </CustomPaper>
  );
}
