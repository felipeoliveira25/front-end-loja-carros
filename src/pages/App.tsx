import Form from "../components/Form"
import List from "../components/List"
import Titulo from "../components/Titulo"
import CarProvider from "../contexts/CarProvider"
import style from './style.module.scss'

function App() {
  

  return (
    <CarProvider>
      <div className={style.AppStyle}>
        <Titulo/>
        <Form/>
        <List/>
      </div>
      
    </CarProvider>
  )
}

export default App
