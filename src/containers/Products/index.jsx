/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import productsLogo from "../../assets/productsBg.svg"
import { useState, useEffect } from "react";
import api from '../../services/api'
import { Conteiner, ProductsImage, CategoryButton, ConteinerCategory, ProductConteiner } from "./styles"
import { CardProducts } from "../../components";
import { useLocation } from "react-router-dom";


export const Products = (props) => {
    console.log('props aqui', props)

    const location = useLocation()


    let category = 0

    if (location.state) {
        category = location.state.categoryId
    }


    const [menucategory, setMenucategory] = useState([])
    const [activecategory, setActiveCategory] = useState(category)
    const [filterProducts, setFilterProducts] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function loadingCategorys() {
            const { data } = await api.get('categorys')

            const newCategory = [{
                id: 0,
                name: 'todas',
            }, ...data]


            setMenucategory(newCategory)
        }



        async function loadingProducts() {
            const { data } = await api.get('products')



            setProducts(data)

        }

        loadingProducts()
        loadingCategorys()


    }, [])

    useEffect(() => {

        if (activecategory === 0) {
            setFilterProducts(products)
        } else {

            const newProductFilter = products.filter(product => product.category_id === activecategory)

            setFilterProducts(newProductFilter)

        }
    }, [products, activecategory])


    return (



        <Conteiner>
            <ProductsImage src={productsLogo} alt="" />
            <ConteinerCategory>
                {menucategory &&
                    menucategory.map((category =>
                        <CategoryButton
                            type="button"
                            onClick={() => { setActiveCategory(category.id) }}
                            $isActiveCategory={activecategory === category.id}
                            key={category.id}>{category.name}
                        </CategoryButton>

                    ))}
            </ConteinerCategory>

            <ProductConteiner>
                {filterProducts &&
                    filterProducts.map((product =>
                        <CardProducts key={product.id} product={product} />

                    ))}
            </ProductConteiner>

        </Conteiner>

    )
}

