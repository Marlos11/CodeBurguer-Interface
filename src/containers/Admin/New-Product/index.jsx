// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';





import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import ReactSelect from "react-select";
import { useForm } from "react-hook-form";


const NewProduct = () => {
    const [fileName, setFileName] = useState(null)


    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products')


        }
        loadProducts()
    }, [])


    return (
        <Container>
            <form>
                <Label >Nome</Label>
                <Input type='text'{...register('name')} />

                <Label>Preço</Label>
                <Input type='number'{...register('price')} />

                <LabelUpload>
                    {fileName || (
                        <>
                        <CloudUploadIcon/>
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
                <ReactSelect />

                <ButtonStyles> Adicionar Produto </ButtonStyles>
            </form>
        </Container>
    );
}

export default NewProduct

