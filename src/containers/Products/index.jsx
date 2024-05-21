// eslint-disable-next-line no-unused-vars
import React from "react";
import productsLogo from "../../assets/productsBg.svg"
import { useState, useEffect } from "react";
import api from '../../services/api'
import { Conteiner, ProductsImage, CategoryButton, ConteinerCategory, ProductConteiner } from "./styles"
import {CardProducts} from "../../components";


export const Products = () => {

    const [menuCategorie, setMenuCategorie] = useState([])
    const [activecategory, setActiveCategory] = useState(0)
    const [filterProducts, setFilterProducts] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function loadingCategorys() {
            const { data } = await api.get('categories')

            const newCategory = [{
                id: 0,
                name: 'todas',
            }, ...data]


            setMenuCategorie(newCategory)
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
                {menuCategorie &&
                    menuCategorie.map((categorie =>
                        <CategoryButton
                            type="button"
                            onClick={() => { setActiveCategory(categorie.id) }}
                            $isActiveCategory={activecategory === categorie.id}
                            key={categorie.id}>{categorie.name}
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

