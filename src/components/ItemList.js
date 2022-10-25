import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";


export default function ItemList(){

const [cartas, setCartas] = useState("");
const [loading, isLoading] = useState(false)
const {categoria} = useParams();

  //Obtencion JSON
const listado = () => {
    let items = require("./productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(true)
        }, 2000);
    })
}


useEffect(() => {
    async function fetchedItems(){
        const items = await listado(); 
        setCartas(items)
    }

    fetchedItems()
}, []);



    return ( 
        <div className="flex flex-wrap justify-between">
            {!loading ?  cartas
            : categoria ? cartas
            .filter((marca) => marca.categoria === categoria)
            .map((element)=>(
        <div>
            <Item 
            key={element.id}
            marca={element.marca}
            modelo={element.modelo}
            precio={element.precio}
            img = {element.img}
            stock={element.stock}
            

            />
        </div>
        ))
    : cartas
    .map((element) => (
        <Item
        key={element.id}
        marca={element.marca}
        modelo={element.modelo}
        precio={element.precio}
        img = {element.img}
        categoria= {element.categoria}
        stock={element.stock}
        />
    ))}
        </div>

    );
}