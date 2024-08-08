import { createContext, Dispatch, SetStateAction } from "react";
import { Carro } from "../types/carro";

type CarContextType = {
    carros: Carro[],
    setCarros: Dispatch<SetStateAction<Carro[]>>;
}
export const CarContext = createContext<CarContextType>({
    carros: [],
    setCarros: () => {}
})