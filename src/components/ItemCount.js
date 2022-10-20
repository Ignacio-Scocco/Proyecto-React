import {useState} from "react"

function ItemCount ({stock}) {
const [value, setValue] = useState (0);
const [state, setState] = useState ("");

function Agregar () {
    stock !== value ? setValue (value + 1) : setState ("Stock superado")
    }

    function quitar() {
        setState ("");
        value !==0 ? setValue (value - 1) : setState ("");
    }

    return (
        <div>
            <div className="flex flex-row justify-around">
            <button className="bg-blue-200 rounded-xl w-10 h-10" onClick={quitar}>➖</button>
                <h1 className="text-black">{value}</h1>
                <button className="bg-blue-200 rounded-xl w-10 h-10" onClick={Agregar}>➕</button>
            </div>
            <h2>{state}</h2>
        </div>
    )

}

export default ItemCount;