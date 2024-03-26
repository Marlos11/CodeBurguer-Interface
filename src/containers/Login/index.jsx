
import React from "react";
import LoginImg from '../../assets/img-login.svg'
import LogoImg from '../../assets/logo.svg'

import { LoginImage, 
    Button, 
    Conteiner, 
    ConteinerItens, 
    Input, 
    SingInLink, Label } from "./styles";



function Login() {
    return (
        <Conteiner>
            <LoginImage src={LoginImg} alt="login-img" />
            <ConteinerItens>
               
                <img src={LogoImg} alt="imagem-logo-code-burguer"/>
                <h1>Login</h1>
               
                <Label>Email</Label>
                <Input />
               
                <Label>Senha</Label>
                <Input />

                <Button>SingIn</Button>
                <SingInLink>
                    Não possui conta? <a>SingUp</a>
                </SingInLink>
            </ConteinerItens>
        </Conteiner>
    )
}

export default Login