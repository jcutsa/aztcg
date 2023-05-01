import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import GridWrapper from '../components/GridWrapper';
import OrderTable from '../components/OrderTable';


export default function Orders() {
  return (
    <GridWrapper>
      <OrderTable />
    </GridWrapper>
  );
}






