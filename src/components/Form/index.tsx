import { useContext, useState } from "react"
import Button from "../Button"
import style from './Form.module.scss'
import { CarContext } from "../../contexts/CarContext";
function Form(){
    
    const {carros, setCarros} = useContext(CarContext)
    const [carro, setCarro] = useState({nome:'', preco:0})
    const adicionarCarro = (e: React.FormEvent) => {
        e.preventDefault();
        setCarros([...carros, carro]);
        setCarro({nome:'', preco:0})
        
    }
    return(
        <form className={style.novoCarro} onSubmit={adicionarCarro}>
            <div className={style.inputContainer}>
                <label htmlFor="nome">Nome do carro:</label>
                <input 
                    type="text" 
                    name="nome" 
                    id="nome"
                    value={carro.nome}
                    onChange={e => setCarro({...carro, nome: e.target.value})} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="preco">Preço:</label>
                <input 
                    type="number" 
                    name="preco" 
                    id="preco" 
                    value={carro.preco}
                    onChange={e => setCarro({...carro, preco: Number(e.target.value)})}/>
            </div>
            <Button 
                type="submit"
                texto="Adicionar"/>
        </form>
    )
}

export default Form