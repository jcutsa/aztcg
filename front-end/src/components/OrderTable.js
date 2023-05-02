import React, { useEffect, useState } from 'react'
import DataTable from './DataTable';
import { GridToolbar } from '@mui/x-data-grid';


//function that takes the ship boolean and if its true it'll return 'Shipped' else it will return 'Not Yet Shipped'
function getShippedStatusCell(shippedValue){

    if (shippedValue === true) {
        return 'Shipped';
      } else {
        return 'Not yet Shipped';
      }
    }
//function that takes in the double for amount and formats it as $0.00
function formatDollarAmount(amount) {
        const formattedAmount = `$${amount.toFixed(2)}`;
        return formattedAmount;
      }
    
    const columns = [
        {field: 'date', headerName: 'Date Order Placed', width:200, headerAlign: 'center',align: 'center'}, 
        {field: 'user_id', headerName: 'User ID', width: 150, headerAlign: 'center', align: 'center'},
        {field: 'first_name', headerName: 'First Name', width: 150, headerAlign: 'center', align: 'center'}, 
        {field: 'last_name', headerName: 'Last Name', width: 150, headerAlign: 'center', align: 'center'},
        {field: 'shipped', type: 'boolean', headerName: 'Shipping Status', width: 150, headerAlign: 'center',align: 'center', 

        renderCell: (params) => {
      return getShippedStatusCell(params.value);
    }
       
        },
        
        {field: 'total', headerName: 'Total', width:150,  headerAlign: 'center',cellClassName: 'center',align: 'center', 
        renderCell: (params) => {
            return formatDollarAmount(params.value);
          }
        
        },

    ];

    const rows = [
        

    ];

const OrderTable = () => {


    const [orders, setOrders] = useState ([]);
    const [userIds, setUserIds] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/order/getAll")
          .then((response) => response.json())
          .then((json) => {
            console.log("Getting Object from API:", json);
            setOrders(json);
            const ids = json.map(order => order.user_id);
            console.log("Create an array of userIDs", ids);
            setUserIds(ids);
          });
    }, []);

    


     return (
        
         <DataTable
         
            rows = {orders}
            columns={columns}
            />
     );
};

export default OrderTable