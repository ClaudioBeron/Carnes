import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/listaDeitems/ItemListContainer';
import Counter from './Components/Counter/itemCount';
import { useState } from 'react';
import Carro from './Components/CartWidget/CartWidget';
import {BrowserRouter, Routes ,Route ,Link} from 'react-router-dom'





function App() {
  const [show ,setShow] = useState (true)

  const handleOnAdd =(quantity) => {
    console.log (`se agregaron ${quantity} productos `)
  }
    
    
  return (
    
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
      <NavBar />
 
      <Routes>
        <Route path='/Carnes' element={<ItemListContainer/>}/>
        <Route path='/Detalle' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>


      </Routes>
       
      </BrowserRouter>
       
        
               

    <button onClick ={()  => setShow(!show)}>{show ? `Desmontar contador` : `Montar contador`}</button>
    {show ? <Counter  initial ={0} stock ={10} onAdd={ handleOnAdd}/>:null }




      </header>
    </div>

  );
}

export default App;
