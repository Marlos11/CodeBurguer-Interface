import styled from "styled-components";


export const Conteiner = styled.div`
    background: #EFEFEF;
 
`

export const ConteinerCategory = styled.div`

display: flex;
justify-content: center;
gap:50px;
margin-top: 15px;



`
export const ProductsImage = styled.img`
    width: 100%;
`
export const CategoryButton = styled.button`

font-size: 17px;
font-style: normal;
font-weight: 400;
border: none;
line-height: normal; 
color:${props => props.isActiveCategory ? '#9758A6' : '#9a9a9d'};
border-bottom: ${props => props.isActiveCategory &&'2px solid  #9758A6' };
padding-bottom: 5px;

`

export const ProductConteiner = styled.div`

display:grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    justify-content: center;
`