import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar"
import Home from './Component/Home';
import Electronics from './Component/Electronics';
import Jewelerys from './Component/Jewelerys';
import MenCloths from './Component/MenCloths';
import WomenCloths from './Component/WomenCloths';
// import Items from './Items';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/electronic" element={<Electronics></Electronics>}></Route>
<    Route path='/jewelery' element={<Jewelerys></Jewelerys>}></Route>
    <Route path="/men" element={<MenCloths></MenCloths>}></Route>
    <Route path="/women" element={<WomenCloths></WomenCloths>}></Route>
    
    
   
    </Routes>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
