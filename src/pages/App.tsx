import style from './style.module.scss' //importa estilização para o projeto
import { SlTrash } from "react-icons/sl";// importa ícone de lixo para excluir carros
import { LuPencil } from "react-icons/lu";// importa ícone de lápis para editar os carros
import {mostrarCarros, adicionarCarro} from '../services/connectionApi.js'; // importa as duas funções de manipulação do banco de dados GET e POST
import { useEffect, useRef, useState } from 'react'; //importa os 3 hooks para as funcionalidades

function App() {
  interface Carro{ // crio uma interface para carro, para que todos os carros adicionados respeitem essa estrutura, como se fosse um contrato
    id: number;
    modelo: string;
    preco: number;
    marca: string;
    cavalos: number;
  }
  const inputModelo = useRef<HTMLInputElement>(null)// useRef usado para referenciar elementos de um componente
  const inputPreco = useRef<HTMLInputElement>(null) 
  const inputMarca = useRef<HTMLInputElement>(null)
  const inputCavalos = useRef<HTMLInputElement>(null)
  const [carros, setCarros] = useState<Carro[]>([])

  useEffect(() => { //useEffect serve para renderizar itens ou executar tarefas
    const pegarCarros = async () => { // código assíncrono pois precisa fazer uma operação I/O 
      try {
        const carrosData = await mostrarCarros() // armazeno em uma variável o valor retornado da operação mostrarCarros()
        setCarros(carrosData) // atualizo o estado com esses valores que chegaram
      } catch (error) {
        console.error('Erro ao buscar os carros: ', error) // em caso de erro, ele irá mostrar no console
      }
    }

    pegarCarros()
  }, []) //array de dependências que determina quando o efeito deve ser reexecutado. Se você não passar um array, o efeito será executado após cada renderização. Se passar um array vazio
         //o efeito será executado apenas uma vez, após a primeira renderização. Se deseja que o efeito seja executado quando certas variáveis mudam, inclua essas variáveis no array
         // de dependências. 

  async function criarCarro() {
    if ( //caso esses 4 inputs não sejam nulos e contenham de fato um conteúdos neles, a verificação passa
        inputModelo.current &&
        inputPreco.current &&
        inputMarca.current &&
        inputCavalos.current
    ) {
        //armazeno todos os valores dos inputs em uma constante. Esses valores vieram do useRef escrito mais acima
        const modelo = inputModelo.current.value;
        const preco = parseFloat(inputPreco.current.value); // Converte para número
        const marca = inputMarca.current.value; // Pode ser undefined
        const cavalos = parseFloat(inputCavalos.current.value); // Converte para número

        await adicionarCarro(modelo, preco, marca, cavalos); // uso o await para esperar que os dados cheguem de fato ao banco de dados
    } else {
        console.error('Alguns campos não estão disponíveis.'); // emite um erro caso algum dos inputs ainda esteja nulo
    }
}
  return (
   
      <div className={style.container}>
        <form>
          <h1>Adicione seus carros!</h1>

          <input ref={inputModelo} type="text" name='modelo' placeholder='Modelo' />
          <input ref={inputPreco} type="number" name='preco' placeholder='Preço' />
          <input ref={inputMarca} type="text" name='marca' placeholder='Marca' />
          <input ref={inputCavalos} type="number" name='cavalos' placeholder='Cavalos' />

          <button onClick={criarCarro}>Adicionar</button>
        </form>

        <div className={style.divLista}>
          {carros.map((carro) => (
            <div key={carro.id} className={style.itemLista}>
              <div className={style.itemListaText}>
                <span><strong>Modelo:</strong> {carro.modelo}</span>
                <span><strong>Preço:</strong> R${carro.preco}</span>
                <span><strong>Marca:</strong> {carro.marca}</span>
                <span><strong>Cavalos:</strong> {carro.cavalos}HP</span>
              </div>
              <div className={style.itemListaIcons}>
                <SlTrash  color='#52050A'/>
                <LuPencil color='#387F39'/>
              </div>
         
            </div>
            
          ))}
        </div>
      </div>
      
    
  )
}

export default App
