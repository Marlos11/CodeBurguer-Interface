// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Container } from './styles'


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
            date: orders.createdAt,
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
            <h1>
                Pedidos
            </h1>
        </Container>
    )
}

export default Orders