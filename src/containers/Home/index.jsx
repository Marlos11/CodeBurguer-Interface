import React from "react"
import  HomeLogo from '../../assets/burger.svg'
import { Container, HomeImg } from "./styles"
import CategoryCarousel from "../../components/CategoryCarroseul"





const Home = () => {
   
   
    return (
        <Container> 

            <HomeImg src={HomeLogo} alt="home-logo" />
            <CategoryCarousel/>
        </Container>
    )
}

export default Home