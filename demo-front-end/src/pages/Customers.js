import React from 'react';
import { Container, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow } from '@mui/material';

function Customers() {
  const paperStyle={padding:20, height:'80vh', width:'70wh', margin:"20px auto"}
  const headerStyle={color:'burlywood', "justify-self": "center"}

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h2 style={headerStyle}>List of Customers</h2>
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Account</TableCell>
                            <TableCell>Credit</TableCell>
                            <TableCell>Date of Opening</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {PostData.map((list, index) => (
                        <TableRow key={index}>
                            <TableCell>{list.first_name}</TableCell>
                            <TableCell>{list.email}</TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </Paper>
    </Container>
    )
}

export default Customers;
