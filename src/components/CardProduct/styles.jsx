import styled from "styled-components";


export const Conteiner = styled.div`
   
 border-radius: 30px;
background: #FFF;
box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.10);
display: flex;
padding: 16px;
gap: 20px;
max-width: max-content;
div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  
    
}
`

export const Image = styled.img`

width: 185px;
border-radius: 10px;
object-fit: cover;
`

export const ProductPrice = styled.p`

color: #000;


font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const ProductName = styled.p`

color: #000;

font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
`

