
import React from "react";
import { useForm, } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import LoginImg from '../../assets/img-login.svg'
import LogoImg from '../../assets/logo.svg'

import {
    LoginImage,
    Button,
    Conteiner,
    ConteinerItens,
    Input,
    SingInLink, 
    Label,
    ErrorsMessage
} from "./styles";



function Login() {
const schema = Yup.object().shape({
    email:Yup.string().email('email invalido').required('Obrigatorio preencher o campo email '),
    password:Yup.string().required('Obrigatorio preencher o campo de senha ').min(6, 'a senha deve conter no minimo 6 digitos' )
})
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver:yupResolver(schema)
    })
    const onSubmit = (data) => console.log(data)

    return (
        <Conteiner>
            <LoginImage src={LoginImg} alt="login-img" />
            <ConteinerItens>

                <img src={LogoImg} alt="imagem-logo-code-burguer" />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register('email')} error={errors.email?.message} />
                    <ErrorsMessage>{errors.email?.message}</ErrorsMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <ErrorsMessage>{errors.password?.message}</ErrorsMessage>

                    <Button>SingIn</Button>
                </form>
                <SingInLink>
                    Não possui conta? <a>SingUp</a>
                </SingInLink>
            </ConteinerItens>
        </Conteiner>
    )
}

export default Login