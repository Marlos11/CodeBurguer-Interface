import Category from '../../assets/CATEGORIAS.svg'
import { CategoryImage, Contaiener } from './styles'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

const CategoryCarousel = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        async function loadingCategorys() {
            const { data } = await api.get('categories')

            console.log(data)
           

            setCategories(data)
        }

        loadingCategorys()
    }, [])

    return (
        <Contaiener>

            <CategoryImage src={Category} atl="Categoria-logo" />


            <Carousel itemsToShow={4}>
                {categories &&
                    categories.map(categories => (
                        <div key={categories.id}>
                            <img src={categories.url}alt="foto-categoria" />
                           <button>{categories.name}</button>
                        </div>


                    ))}
            </Carousel>
        </Contaiener>

    )
}

export default CategoryCarousel