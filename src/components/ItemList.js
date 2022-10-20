import { useState, useEffect } from "react";
import Item from "./Item";


export default function ItemList(){

const [cartas, setCartas] = useState("");
const [loading, isLoading] = useState(false)

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
            {loading ?  cartas.map((el)=>(
        <div>
                {console.log(el)}
            <Item 
            key={el.id}
            marca={el.marca}
            modelo={el.modelo}
            precio={el.precio}
            img = {el.img}
            stock={el.stock}
            

            />
        </div>
        ))
    :"loading"}
        </div>

    );
}