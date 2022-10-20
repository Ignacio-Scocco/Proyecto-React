import ItemList from "./ItemList";


function ItemListContainer (greeting) {
    return (
        <div>
            <h1 className="text-3xl font-bold underline flex justify-center pt-6">{greeting.msg}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;