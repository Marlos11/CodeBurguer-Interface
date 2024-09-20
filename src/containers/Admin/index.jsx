// eslint-disable-next-line no-unused-vars
import React from "react"
/* import Orders from "./Orders"
 */
import { Container,ContainerItems } from './styles'
import { SideMenuAdmin } from "../../components"
import ListProducts from "./List-Products"


export const Admin = () => {




    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>

                <ListProducts />
                {/*         <Orders/>
 */}
            </ContainerItems>
        </Container>
    )
}