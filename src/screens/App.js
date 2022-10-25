import NavBar from "../components/NavBar"
import ItemListContainer from '../components/ItemListContainer';
import Contact from "./Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/*" element={<ItemListContainer/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
