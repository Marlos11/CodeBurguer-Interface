import Category from '../../assets/CATEGORIAS.svg'
import { ButtonCarousel, CategoryImage, Contaiener, ConteinerItems,Image} from './styles'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

export const CategoryCarousel = () => {


    const [categories, setCategories] = useState([])

    useEffect(() => {

        async function loadingCategorys() {
            const { data } = await api.get('/categories')



            setCategories(data)
        }

        loadingCategorys()
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

            <CategoryImage src={Category} />


            <Carousel itemsToShow={4} style={{ width: '90%' }}
                breakPoints={breakPoints}

            >

                {categories &&
                    categories.map(categories => (
                        <ConteinerItems key={categories.id}>
                            <Image src={categories.url}/>
                            <ButtonCarousel>{categories.name}</ButtonCarousel>
                        </ConteinerItems>


                    ))}


            </Carousel>

        </Contaiener >

    )
}

