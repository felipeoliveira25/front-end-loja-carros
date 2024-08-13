import api from "./api";// importo a constante criada

const mostrarCarros = async () => { //função assíncrona para buscar todos os carros presentes no banco de dados
    const res = await api.get('/carros') //armazeno em uma const os itens que vierem da resposta da api
    return res.data // desejo que a função retorne apenas os dados da resposta
}

const adicionarCarro = async (modelo: string, preco: number, marca: string, cavalos: number) => { // função assíncrona para fazer um POST de um novo carro
    await api.post('/carros', { // crio um novo carro seguindo o modelo da interface criada, e respeitando a estrutura do model usado na API
        modelo: modelo,
        preco: preco,
        marca: marca,
        cavalos: cavalos
    })
}

export { mostrarCarros, adicionarCarro} //exporto as duas funções