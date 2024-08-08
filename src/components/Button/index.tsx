import style from './Button.module.scss'

interface ButtonProps {
    texto: string,
    onClick ?: () => void,
    type: "submit" | "reset" | "button" | undefined
}

function Button(props: ButtonProps){
    return(
        <button className={style.button} type={props.type} onClick={props.onClick} >{props.texto}</button>
    )
}

export default Button