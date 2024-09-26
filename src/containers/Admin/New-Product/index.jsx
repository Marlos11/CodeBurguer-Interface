// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import api from '../../../services/api'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';





import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";


const NewProduct = () => {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
  

    const { register, handleSubmit, control } = useForm()
    const onSubmit = data => console.log(data)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categorys')
            console.log(data)

            setCategories(data)
        }
        loadCategories()
    }, [])


    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label >Nome</Label>
                <Input type='text'{...register('name')} />

                <Label>Preço</Label>
                <Input type='number'{...register('price')} />

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
                <Controller
                    name="category_id" control={control} render={({ field }) => {
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

                <ButtonStyles> Adicionar Produto </ButtonStyles>
            </form>
        </Container>
    );
}

export default NewProduct

