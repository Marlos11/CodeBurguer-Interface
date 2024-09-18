// eslint-disable-next-line no-unused-vars
import React from "react"
import { useUser } from "../../hooks/UserContext";
import LogoutIcon from '@mui/icons-material/Logout';

import linkList from "./menu-list"

import { Container, ItemContainer, ListLink } from "./styles"

export const SideMenuAdmin = () => {

    const { logout } = useUser()
    return (
        <Container>
            <hr></hr>
            {linkList.map(item => (
                <ItemContainer key={item.id} isActive={true} >
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>

            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
                <LogoutIcon style={{ color: '#ffffff' }} />
                <ListLink to="/login" onClick={logout}>
                    Sair
                </ListLink>
            </ItemContainer>
        </Container >
    )
}

