
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function ItemDetailContainer() {
    const {botinID} = useParams();
    const [cartas, setCartas] = useState({});
    const [loading, isLoading] = useState(true)


const getItem = () => {
    let items = require("../components/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(false)
        }, 1000);
    })
}


useEffect(() => {
    async function fetchedItems(){
        const items = await getItem(); 
        const itemSeleccionado = items.find(item => item.id === botinID)
        setCartas(itemSeleccionado)
    }

    fetchedItems()
}, []);

    return(

    
        <div className="md:flex justify-start ml-10 h-[100vh] ">   

            <ItemDetail 
            key={cartas.id}
            marca={cartas.marca}
            modelo={cartas.modelo}
            precio={cartas.precio}
            img = {cartas.img}
            stock={cartas.stock}
            categoria = {cartas.categoria}

            />
        </div>

    );
}

export default ItemDetailContainer;