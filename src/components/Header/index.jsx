// eslint-disable-next-line no-unused-vars
import React from "react"
import { useLocation, useNavigate } from "react-router-dom";
import User from '../../assets/user.svg'
import Cart from '../../assets/carrinho.svg'
import { useUser } from '../../hooks/UserContext'

import {
    Container,
    ContainerLeft,
    ContainerRight,
    PageLink,
    ContainerText, Line,
    PagelinkExit
} from "./styles"



export const Header = () => {
    const { logout } = useUser()
    const navigate = useNavigate()
    const location = useLocation()


    const navigatePath = (path) => {
        console.log(path)
        if (location.pathname !== path)
            navigate(path)
    }

    const isActivePath = (basePath) => {
        return location.pathname.includes(basePath)
    }


    const userLogout = () => {
        logout()
        navigate('/login')
    }
    return (

        <Container>
            <ContainerLeft>
                <PageLink onClick={() => navigatePath('/')} isActive={location.pathname === '/'}>Home </PageLink>

                <PageLink onClick={() => navigatePath('/produtos')}
                    isActive={isActivePath('/produtos')}
                > Ver produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Cart} alt="carrinho " />
                </PageLink>
                <Line></Line>

                <PageLink>
                    <img src={User} alt="usuario-logo " />
                </PageLink>
                <ContainerText>
                    <p>Ola,Marlos</p>
                    <PagelinkExit onClick={userLogout}>
                        Sair
                    </PagelinkExit>
                </ContainerText>
            </ContainerRight>



        </Container>
    )

}

