// eslint-disable-next-line no-unused-vars
import React from "react"
import  HomeLogo from '../../assets/burger.svg'
import { Container, HomeImg } from "./styles"
import CategoryCarousel from "../../components/CategoryCarroseul"
import OfferCarousel from "../../components/OfferCaroseul"





const Home = () => {
   
   
    return (
        <Container> 

            <HomeImg src={HomeLogo} alt="home-logo" />
            <CategoryCarousel/>
            <OfferCarousel/>
        </Container>
    )
}

export default Home