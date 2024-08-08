import ItemList from "./Item"
import style from './List.module.scss'
import { useContext } from "react"
import { CarContext } from "../../contexts/CarContext"

function List(){
    const {carros} = useContext(CarContext)
    return(
        <div className={style.listaCarros}>
            <ul>
                {carros.map((carro, index) => (
                   <ItemList
                    key={index} 
                    nome={carro.nome}
                    preco={carro.preco}/>
                ))}
            </ul>
        </div>
    )
}

export default List