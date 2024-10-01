// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";

import CloudUploadIcon from '@mui/icons-material/CloudUpload';



import { ErrorMessage } from '../../../components/ErrorMessage'




import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";


const NewProduct = () => {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    const navigation = useNavigate()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('required', 'Carregue sua Imagem', value => {
            return value?.length > 0
        }).test('fileSize', 'Tamanho de arquivo nao suportado', value => {
            return value[0]?.size <= 200000
        }).test('type', 'Somente arquivos JPEG', value => {
            return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
        })
    })



    const { register, handleSubmit, control, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async data => {
        const productDataFormData = new FormData

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])

        

        await  toast.promise(api.post('products', productDataFormData),{
            pending:'Criando novo produto',
            success:'Produto criando com seucesso',
            error:'Falha na criaçao do produto '
        }) 

        setTimeout(()=>{
            navigation('/listar-produtos')
        },2000)
        console.log(productDataFormData)
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categorys')


            setCategories(data)
        }
        loadCategories()
    }, [])




    return (
        <Container>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>

                    <Label >Nome</Label>
                    <Input type='text'{...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>

                    <Label>Preço</Label>
                    <Input type='number' style={{ appearance: 'none' }}{...register('price')} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>

                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Carregue a imagem do produto
                            </>

                        )
                        }
                        <input type='file'
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={value =>
                                setFileName(value.target.files[0]?.name)
                            }
                        />

                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>

                    <Controller
                        name="category" control={control} render={({ field }) => {
                            return (

                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='Categorias'
/*                                 {...register('categorys')}
 */                            />
                            )

                        }}


                    >

                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>


                <ButtonStyles> Adicionar Produto </ButtonStyles>
            </form>
        </Container>
    );
}

export default NewProduct

