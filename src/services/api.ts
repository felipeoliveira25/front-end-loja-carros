import axios from "axios"; //importa axios, usado para fazer requisições HTTP

const api = axios.create({ //armazeno em uma constante a URL base da minha API feita em MongoDB
    baseURL: 'http://localhost:3000'
})

export default api //exporto para começar a usar os métodos