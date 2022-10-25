import CartIcon from './CartWidget';
import { Link, NavLink } from "react-router-dom";

function NavBar () {
    return (
        <div className="bg-cyan-400 dark:bg-gray-400 shadow text-white ">
            <nav className='md:flex md:items-center md:justify-between'>
                <div className="flex justify-between items-center">
                <span className="text-xl font-mono mx-4 p-5 font-['monaco'] cursor-pointer">
                    <Link to={`/`} className="no-underline flex flex-row">
                        <img className="pr-8" src="../assets/boots.jpeg"></img>
                        <p className='text-white'>Bootstart</p>
                    </Link>
                </span>
                </div>
                <ul className='md:flex md:items-center z-[-1] bg-cyan-400 md:bg-cyan-400 dark:bg-gray-400 md:dark:bg-gray-400 md:z-auto md:static absolute w-full left-0 md:w-auto py-5 md:pl-0 pl-7'>
                <li className="text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white  text-l hover:text-cyan-800 duration-500 px-4 py-2.5 text-center inline-flex items-center " type="button">Categorias <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div id="dropdown" class="hidden  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <NavLink to = {`/categoria/nike`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nike</NavLink>
                                    
                                </li>
                                <li>
                                <NavLink to = {`/categoria/adidas`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Adidas</NavLink>

                                </li>
                                <li>
                                <NavLink to = {`/categoria/munich`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Munich</NavLink>

                                </li>
                            </ul>
                        </div>
                        </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <a className='no-underline text-white' href="">Contacto</a>
                    </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0 ">
                        <CartIcon />
                    </li>
                    
                </ul>
            </nav>

        </div>
    )
}

export default NavBar;