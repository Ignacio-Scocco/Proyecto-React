import NavBar from "../components/NavBar"
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from "../components/ItemDetailContainer"
import Contact from "./Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/:categoria/:marcaID" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
