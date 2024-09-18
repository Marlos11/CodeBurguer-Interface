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

import { Container } from "../styles";


const ListProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadProducts()
    }, [])

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell>Produto em Oferta</TableCell>
                            <TableCell>Imagem</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="product">
                                    {product.name}
                                </TableCell>
                                <TableCell>{product.Price}</TableCell>
                                <TableCell>{product.offer}</TableCell>
                                <TableCell><img src={product.url} alt="imagem-produto" /></TableCell>
                                <TableCell><button>Editar</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default ListProducts;

