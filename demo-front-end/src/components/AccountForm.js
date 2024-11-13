import * as React from 'react';
import { useState } from 'react';
import { Container, Paper, Button, TextField, Box } from '@mui/material';

export default function BasicTextFields() {
  const paperStyle = { padding: 20, width: 500, margin: "20vh auto" }
  const buttonStyle = { margin: '20px 0' }
  const[customerId, setCustomerId] = useState('');
  const[initialCredit, setInitialCredit] = useState('0');
  const handleClick = (e) => {
    e.preventDefault();
    const args = { customerId: customerId, initialCredit: initialCredit };
    console.log(args);
    const urlEncodedData = new URLSearchParams(args).toString();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncodedData
    };

    fetch('http://localhost:8080/api/account', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <Container> 
        <Paper elevation={3} style={paperStyle}>
            <h2 style={{color:"burlywood"}}>Create A Current Account</h2>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            >
            <TextField id="customerId" label="Customer ID" variant="outlined" 
            value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
            <TextField id="initialCredit" label="Initial Credit" variant="outlined" 
            value={initialCredit} onChange={(e) => setInitialCredit(e.target.value)} />
            </Box>
            <Button style={buttonStyle} variant="outlined" onClick={handleClick}>Submit</Button>
        </Paper>
    </Container>
  );
}