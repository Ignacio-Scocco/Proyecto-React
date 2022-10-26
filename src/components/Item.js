import {NavLink} from "react-router-dom"


function Item(props) {

    return (
        <div className='md:gap-y-4 gap-x-8 mx-2 my-4 mt-10'>
            <div className="w-full max-w-sm bg-blue-100 rounded-lg shadow-md dark:bg-gray-500 dark:border-gray-700">
                <div>
                    <img className="p-4 rounded-t-lg w-96 h-85" src={props.img} alt="product" />
                </div>
                <div className="px-5 pb-5">
                    <div>
                    <h5 class="mb-4 text-base font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-cyan-200 from-sky-500 flex justify-center">{props.marca}</span></h5>
                    </div>
                    <div className="flex items-center mt-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Modelo: {props.modelo}</span>
                    </div>
                    <div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Stock: {props.stock}</span>
                    </div>
                    <div className="flex justify-end  items-center">
                        <NavLink to={`/${props.categoria}/${props.id}`}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-3 m-4  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline">Ver mas información!</NavLink>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Item;