import Offers from '../../assets/OFERTAS.png'
import { ButtonCarousel, OffersImage, Contaiener, ConteinerItems,Image} from './styles'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

export const OfferCarousel = () => {


    const [offers, setOffers] = useState([])

    useEffect(() => {

        async function loadingOffers() {
            const { data } = await api.get('/products') 

            const onlyOffers = data.filter(product => product.offer).map(product =>{
                return {
                    ...product,formatedPrice: formatCurrency(product.price)
                }
            })

            console.log(data)

            setOffers(onlyOffers)
        }

        loadingOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ]

    return (
        <Contaiener>

            <OffersImage src={Offers} />


            <Carousel itemsToShow={4} style={{ width: '90%' }}
                breakPoints={breakPoints}

            >

                {offers &&
                    offers.map(product => (
                        <ConteinerItems key={product.id}>
                            <Image src={product.url}/>
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <ButtonCarousel>Comprar Agora </ButtonCarousel>
                        </ConteinerItems>


                    ))}


            </Carousel>

        </Contaiener >

    )
}

