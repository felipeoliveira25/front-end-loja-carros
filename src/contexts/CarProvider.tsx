import { ReactNode, useState } from "react";
import { CarContext } from "./CarContext";
import { Carro } from "../types/carro";

interface CarProviderProps{
    children: ReactNode
}

export default function CarProvider({children}: CarProviderProps){
    const [carros, setCarros] = useState<Carro[]>([
        {nome:'Bugatti', preco:200000},
        {nome: 'Ferrari', preco:3000000}
    ])

    return(
        <CarContext.Provider value={{carros, setCarros}}>
            {children}
        </CarContext.Provider>
    )
}