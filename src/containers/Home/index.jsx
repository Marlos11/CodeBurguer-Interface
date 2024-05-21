// eslint-disable-next-line no-unused-vars
import React from "react"
import HomeLogo from '../../assets/burger.svg'
import { Container, HomeImg } from "./styles"
import { CategoryCarousel, OfferCarousel } from "../../components/"





export const Home = () => {


    return (
        <Container>

            <HomeImg src={HomeLogo} alt="home-logo" />
            <CategoryCarousel />
            <OfferCarousel />
        </Container>
    )
}

