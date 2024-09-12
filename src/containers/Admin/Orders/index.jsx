// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

import { Container } from './styles'
import Row from "./Row";
import formatDate from "../../../utils/formatDate";



export const Orders = () => {



    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])

    console.log(orders)
    useEffect(() => {

        async function loadingOrders() {
            const { data } = await api.get('orders')




            setOrders(data)
        }




        loadingOrders()


    }, [])

    function createData(orders) {
        return {
            name: orders.user.name,
            orderId: orders._id,
            date: formatDate(orders.createdAt),
            status: orders.status,
            products: orders.products

        };
    }

    useEffect(()=>{
const newRows = orders.map(ord=>createData(ord))
setRows(newRows)


    },[orders])
console.log(rows)

    return (
        <Container>
           <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell >Cliente </TableCell>
            <TableCell >Data do pedido</TableCell>
            <TableCell >Status</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map((row) => (
            <Row key={row.orderId} row={row} />
          )) }
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default Orders