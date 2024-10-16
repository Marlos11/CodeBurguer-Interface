// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'

import formatCurrency from '../../../utils/formatCurrency'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from "react-router-dom";
import paths from '../../../constants/paths'

import { Container, Img ,InconEdit} from "./styles";


const ListProducts = () => {

    const [products, setProducts] = useState([])

    
    const navigation = useNavigate()

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products')

            setProducts(data)
        }
        loadProducts()
    }, [])

    const isOffer = (offerStatus) => {
        if (offerStatus) {
            return <CheckIcon style={{color:'#228b22'}} />
        }
        return <CancelIcon style={{color:'#cc1717'}} />
    }


    const editProduct = (product)=>{
       
         navigation(paths.EditProduct, {state:{product}}) 

    }
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem</TableCell>
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
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center"> {isOffer(product.offer)}</TableCell>
                                <TableCell align="center"><Img src={product.url} alt="imagem-produto" /></TableCell>
                                <TableCell><InconEdit onClick={()=>editProduct(product)}>Editar</InconEdit></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default ListProducts;

