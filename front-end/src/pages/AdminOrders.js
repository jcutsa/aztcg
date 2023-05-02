import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import GridWrapper from '../components/GridWrapper';
import OrderTable from '../components/OrderTable';
import { Button, Paper } from '@mui/material';
import "../App.css";


export default function Orders() {
  
  return (
    
    <GridWrapper >

       

      <h1> Orders </h1>
      <OrderTable />
    
    </GridWrapper>
  );
}






