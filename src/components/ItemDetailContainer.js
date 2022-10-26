
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function ItemDetailContainer() {
    const {marcaID} = useParams();
    const [cartas, setCartas] = useState("");
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
        setCartas(items)
    }

    fetchedItems()
}, []);

    return(

    
        <div className="md:flex justify-start ml-10 h-[100vh] ">   
        {!loading ? cartas : cartas
            .filter((marca) => marca.id.includes(marcaID))
            .map((element)=>(

            <ItemDetail 
            key={element.id}
            marca={element.marca}
            modelo={element.modelo}
            precio={element.precio}
            img = {element.img}
            stock={element.stock}
            categoria = {element.categoria}

            />
        ))}
        </div>

    );
}

export default ItemDetailContainer;