import React, { useEffect, useState } from 'react'
import DataTable from './DataTable';
import { GridToolbar } from '@mui/x-data-grid';


    const columns = [
        {field: 'date', headerName: 'Date Order Placed', width:300, headerAlign: 'center',align: 'center'}, 
        {field: 'user_id', headerName: 'User ID', width: 150, headerAlign: 'center', align: 'center'},
        {field: 'shipped', headerName: 'Shipping Status', width: 150, headerAlign: 'center',align: 'center'
       
        },
        
        {field: 'order_items', headerName: 'Order Items', width:150,  headerAlign: 'center', align: 'center'},

        {field: 'total', headerName: 'Total', width:150,  headerAlign: 'center',cellClassName: 'center'}
    ];

    const rows = [
        

    ];

const OrderTable = () => {


    const [orders, setOrders] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/order/getAll")
          .then((response) => response.json())
          .then((json) => {
            console.log("Getting Object from API:", json),
            setOrders(json)})
    }, []);
    console.log(orders.date)




     return (
        
         <DataTable
         
            rows = {orders}
            columns={columns}
            />
     );
};

export default OrderTable