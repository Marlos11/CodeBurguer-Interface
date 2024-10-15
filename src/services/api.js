import axios from 'axios'

const apiCodeBurguer = axios.create({

    baseURL: 'codeburguerapi-production-89b1.up.railway.app'

})


// estamos utilizando o axios para intercepitar a nossa requisição para verificar se o token é valido 
// para o usuario ter acesso a pagina de categorias
apiCodeBurguer.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('codeburger:userData')
    const token = userData &&  JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
/* console.log(config) */
    return config
})

export default apiCodeBurguer
