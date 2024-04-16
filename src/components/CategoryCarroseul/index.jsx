import Category from '../../assets/CATEGORIAS.svg'
import { CategoryImage, Contaiener } from './styles'
import api from '../../services/api'
import { useEffect } from 'react'

const CategoryCarousel = () => {

    useEffect(() => {

        async function loadingCategorys() {
            const response = api.get('/categories')

            console.log(response)
        }

        loadingCategorys()
    }, [])

    return (
        <Contaiener>

            <CategoryImage src={Category} atl="Categoria-logo" />
        </Contaiener>

    )
}

export default CategoryCarousel