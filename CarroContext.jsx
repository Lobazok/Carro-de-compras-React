// necesitamos crear un contexto para que los demas componentes puedan acceder a ciertas variable y funciones
import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

//creamos contexto
export const CarroContex = createContext()

//creamos el componente que provera contexto
export const CarroContexProvider = (props) => {

    //creamos un array que el carro
    const [carro, setCarro] = useState([])

    //funcion para crear taras
    const addProducto = (producto) => {

        //[...arrayPrevio, elementoAñadido]

            setCarro([...carro, {
                title: producto.title,
                id: producto.id,
                description: producto.description,
                price: producto.price,
                can: 0
            }])

    }

    //eliminar elemento
    const deteleProducto = (taskId) => {
        //buscamos el index del ultimo elemento 
        let ind = carro.findLastIndex(produc => produc.id == taskId)
        //creamos copia del carro
        let carroCo = carro
        //eliminamos el elemento com splice
        carroCo.splice(ind, 1)
        //sustituimos el carro por la copia del carro
        setCarro(carro.filter(task => task != carroCo))
    }

    //value es el valor del contexto
    return <CarroContex.Provider value={{carro, addProducto, deteleProducto}}>
        {/* props.children es donde iran todos los hijos de este elemento */}
        {props.children}
    </CarroContex.Provider>

}
