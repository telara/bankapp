import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow } from '@mui/material';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const paperStyle={padding:20, margin:"20px auto"}
  const headerStyle = { color: 'burlywood', textAlign: "center", padding:"0 20px 20px 20px" };

  // Fetch customers from backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/customers')
      .then(response => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the customer data!", error);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h2 style={headerStyle}>List of Customers</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Account</TableCell>
                <TableCell>Credit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name} {customer.surname}</TableCell>
                  <TableCell>{customer.account ? 'Yes' : null}</TableCell>
                  <TableCell>{customer.account? customer.balance : null}</TableCell>
                  {/* <TableCell>{customer.account && customer.account.transactions && 
                    customer.account.transactions.length > 0 ? customer.account.transactions[0].datetime.slice(0, 10) : null}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default Customers;
