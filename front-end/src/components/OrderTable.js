import React, { useEffect, useState } from 'react'
import DataTable from './DataTable';


    const columns = [
        {field: 'date', headerName: 'Date', width:150, headerAlign: 'center'}, 
        {field: 'user_id', headerName: 'User ID', width: 150, headerAlign: 'center'},
        {field: 'shipped', headerName: 'Shipping Status', width: 150, headerAlign: 'center'},
        
        {field: 'order_items', headerName: 'Order Items', width:150,  headerAlign: 'center'}

    ];

const OrderTable = () => {

    const [orders, setOrders] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/order/getAll")
          .then((response) => response.json())
          .then((json) => setOrders(json))
    }, []);




     return (
        
         <DataTable

            rows = {orders}
            columns={columns}
            />
     );
};

export default OrderTable