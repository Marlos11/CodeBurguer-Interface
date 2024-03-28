
import React from "react";
import { useForm, } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import * as Yup from 'yup'
import RegisterImg from '../../assets/8 1.svg'
import LogoImg from '../../assets/logo.svg'

import Button from "../../components/Button";
import {
    RegisterImage,

    Conteiner,
    ConteinerItens,
    Input,
    SingInLink,
    Label,
    ErrorsMessage
} from "./styles";



function Register() {
    const schema = Yup.object().shape({
        name: Yup.string().required('O seu nome é obrigatório'),
        email: Yup.string().email('email invalido').
            required('Obrigatorio preencher o campo email '),
        password: Yup.string().
            required('Obrigatorio preencher o campo de senha').
            min(6, 'a senha deve conter no minimo 6 digitos'),
            confirmPassword: Yup.string()
        .required('A senha é obrigatória')
        .oneOf([Yup.ref('password')],'As senha não corresponde')

    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async clientData => {
        const response = await api.post('users', {
            name: clientData.name,
            email: clientData.email,
            password: clientData.password
        })

        
    }

    return (
        <Conteiner>
            <RegisterImage src={RegisterImg} alt="login-img" />
            <ConteinerItens>

                <img src={LogoImg} alt="imagem-logo-code-burguer" />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message} >Nome</Label>
                    <Input type="text" {...register('name')} error={errors.name?.message} />
                    <ErrorsMessage>{errors.name?.message}</ErrorsMessage>
                    
                    <Label error={errors.email?.message}>Email</Label>
                    <Input type="email" {...register('email')} error={errors.email?.message} />
                    <ErrorsMessage>{errors.email?.message}</ErrorsMessage>
                    
                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type="password" {...register('password')} error={errors.password?.message} />
                    <ErrorsMessage>{errors.password?.message}</ErrorsMessage> 
                    
                    <Label error={errors.confirmPassword?.message}>Confirme senha </Label>
                    <Input type="password" {...register('confirmPassword')} error={errors.password?.message} />
                    <ErrorsMessage>{errors.confirmPassword?.message}</ErrorsMessage>

                    <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Sing Up</Button>

                </form>
                <SingInLink>
                    Não possui conta? <a>Sing In</a>
                </SingInLink>
            </ConteinerItens>
        </Conteiner>
    )
}

export default Register