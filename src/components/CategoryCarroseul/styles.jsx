

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Contaiener = styled.div`
background-color:#efefef;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35 px 0 ; 

.rec.rec-arrow{
    background-color: #97588a;
    color: #efefef; 
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
}
.rec.rec-arrow:hover{
    border: 2px solid #97588a;
    background-color: #efefef;
    color: #97588a;
}

.rec.rec-arrow:disabled{
    border: none;
    background-color: #bebebf;
    color: #efefef;
}
`

export const CategoryImage = styled.img`

`

export const ConteinerItems = styled.div`

    display: flex;
    flex-direction: column;

`

export const Image = styled.img`

    width: 200px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
    
`

export const ButtonCarousel = styled(Link)`
    margin-top: 10px;
    background: #9758a6;
    box-shadow: 0px 5px 10px rgba(151,88,166,0.22),0px 20px 40px rgba(151,88,166,0.24);
    border-radius: 8px;
    height: 50px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    line-height: 100%;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 0.8;
    } 

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`