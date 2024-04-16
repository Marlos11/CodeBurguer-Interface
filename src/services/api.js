import axios from 'axios'

const apiCodeBurguer = axios.create({

    baseURL: 'http://localhost:3000'

})


// estamos utilizando o axios para intercepitar a nossa requisição para verificar se o token é valido 
// para o usuario ter acesso a pagina de categorias
apiCodeBurguer.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('codeburger:userData')
    const token = userData &&  JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default apiCodeBurguer
