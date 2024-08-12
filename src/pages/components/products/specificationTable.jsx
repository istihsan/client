import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
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
  maxWidth: "130vh",
  margin: '0 auto', // Center the table horizontally
});

export default function SpecificationsTable({ specifications, variantName }) {
  if (!specifications || !Array.isArray(specifications)) {
    return <div>No specifications available.</div>;
  }

  return (
    <CustomPaper>
      <CenteredTable>
      <TableHead sx={{paddingX:"40%"}}>
            <TableRow>
              <TableCell align="left" colSpan={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            {variantName} Specifications
          </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        <caption>

        </caption>
        <TableBody>
          {specifications.map((spec, index) => (
            <TableRow key={index}>
              <TableCell align="left" component="th" scope="row">
                {spec.parameter}
              </TableCell>
              <TableCell align="center">{spec.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CenteredTable>
    </CustomPaper>
  );
}
