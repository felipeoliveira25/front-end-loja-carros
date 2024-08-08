import style from './Item.module.scss'

export default function ItemList(props: {nome: string, preco: number}){
    return(
        <li className={style.item}>
            <span>Modelo: {props.nome}</span>
            <span>Preço: R${props.preco}</span>
            <span>Marca: </span>
            <span>Ano Fabricação: </span>
        </li>
    )
}