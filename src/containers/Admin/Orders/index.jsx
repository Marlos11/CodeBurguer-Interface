// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'
import status from "./orderStatus";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Container, Menu, LinkMenu } from './styles'
import Row from "./Row";
import formatDate from "../../../utils/formatDate";



export const Orders = () => {



  const [orders, setOrders] = useState([])
  const [filterOrders, setFilterOrders] = useState([])
  const [acvtiveStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  console.log(orders)
  useEffect(() => {

    async function loadingOrders() {
      const { data } = await api.get('orders')




      setOrders(data)
      setFilterOrders(data)
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

  useEffect(() => {
    const newRows = filterOrders.map(ord => createData(ord))
    setRows(newRows)


  }, [filterOrders])
  useEffect(() => {
    if (acvtiveStatus === 1) {
      setFilterOrders(orders)
    } else {


      const statusIndex = status.findIndex(sts => sts.id === acvtiveStatus)
      const newFilterOrders = orders.filter(order => order.status === status[statusIndex].value)
      setFilterOrders(newFilterOrders)
    } 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders])


  function handleStatus(status) {

    if (status.id === 1) {

      setFilterOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilterOrders(newOrders)
    }

    setActiveStatus(status.id)
  }


  return (
    <Container>

      <Menu>

        {status &&
          status.map(status =>
            <LinkMenu key={status.id}
              onClick={() => handleStatus(status)}
              isActiveStatus={acvtiveStatus === status.id}
            > {status.label}</LinkMenu>)}
      </Menu>

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
            {rows.map((row) => (
              <Row key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders