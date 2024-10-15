// eslint-disable-next-line no-unused-vars
import React from "react"
import Orders from "./Orders"

import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from "../../components"
import ListProducts from "./List-Products"
import { useLocation } from "react-router-dom"
import paths from "../../constants/paths"
import NewProduct from "./New-Product"
import EditProduct from "./Edit-Product"


export const Admin = () => {

    const { pathname } = useLocation()





    return (
        <Container>
            <SideMenuAdmin  pathname={pathname}/>
            <ContainerItems>
                {pathname === paths.ProductsList && <ListProducts />}

                {pathname === paths.Order && <Orders />}
                {pathname === paths.NewProduct && <NewProduct />}
                {pathname === paths.EditProduct && <EditProduct />}


            </ContainerItems>
        </Container>
    )
}