import styled from "styled-components";
import Background from '../../assets/Backgroud-login.svg'

export const Conteiner = styled.div`

width: 100vw;
height: 100vh;
background-image: url(${Background});
display: flex;
justify-content: center;
align-items: center;


`

export const LoginImage = styled.img`

height: 85%;

`

export const ConteinerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0 ;
height: 85%;
padding: 25px 75px ;
display: flex;
justify-content: center;
flex-direction: column;

form{
    display: flex;
    flex-direction: column;
}

h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 100px;
}


`

export const Label = styled.p`

font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-top: 28px;
    margin-bottom: 5px;

`

export const Input = styled.input`
width: 250px;
height: 38px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74,144,266,0.19);
border-radius: 5px;
border: ${props => (props.error ? '2px solid #cc1717' : 'none')} ;
padding-left: 10px;
`



export const SingInLink = styled.p`

font-style: normal;
font-size: 14px;
font-weight: normal;
line-height: 16px;
color:#ffff;

a{
    cursor: pointer;
    text-decoration: underline;
}
`

