
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm, } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import * as Yup from 'yup'
import LoginImg from '../../assets/img-login.svg'
import LogoImg from '../../assets/logo.svg'

import {Button} from "../../components";
import {
    LoginImage,

    Conteiner,
    ConteinerItens,
    Input,
    SingInLink,
    Label,
    ErrorsMessage
} from "./styles";



export function Login() {
    
    const navigation = useNavigate()
    const { putUserData } = useUser()
 

    const schema = Yup.object().shape({
        email: Yup.string().email('email invalido').required('Obrigatorio preencher o campo email '),
        password: Yup.string().required('Obrigatorio preencher o campo de senha ').min(6, 'a senha deve conter no minimo 6 digitos')
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async clientData => {
        const { data } = await toast.promise(

            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),

            {
                pending: 'Verificando informações',
                success: 'Seja Bem Vindo(a)! ',
                error: 'Verifique suas informações'
            }
        )
        putUserData(data)
       

        setTimeout(() => {

            if(data.admin){

                navigation('/pedidos')
            }else{
                navigation('/')
            }

        }, 1000);




    }

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

                    <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>SingIn</Button>

                    <SingInLink>
                        Não possui conta? <Link to="/cadastro" style={{ color: 'white' }}>SingUp</Link>
                    </SingInLink>
                </form>
            </ConteinerItens>
        </Conteiner>
    )
}

