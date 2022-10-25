import {useState} from "react"

function ItemCount ({stock}) {
const [value, setValue] = useState (0);

function Agregar () {
    (stock) > value ? setValue (value + 1) : setValue ( value + 0)
    }

    function quitar() {
        value !==0 ? setValue (value - 1) : setValue (value + 0);
    }

    return (
        <div>
            <div className="flex flex-row justify-around">
            <button className="bg-blue-200 rounded-full w-10 h-10" onClick={quitar}>➖</button>
                <h2 className="text-black">{value}</h2>
                <button className="bg-blue-200 rounded-full w-10 h-10" onClick={Agregar}>➕</button>
            </div>
        </div>
    )

}

export default ItemCount;