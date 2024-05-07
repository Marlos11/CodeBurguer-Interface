

import styled from 'styled-components'

export const Contaiener = styled.div`
background-color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35 px 0 ; 
margin-bottom: 16px;

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

export const OffersImage = styled.img`

margin-top: 16px;
    

`

export const ConteinerItems = styled.div`

    display: flex;
    flex-direction: column;

    p{
        font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 120%
    }

`

export const Image = styled.img`

    width: 200px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 16px;
    
`

export const ButtonCarousel = styled.button`
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
`