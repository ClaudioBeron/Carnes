import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/listaDeitems/ItemListContainer';
import Counter from './Components/Counter/itemCount';
import { useState } from 'react';
import Carro from './Components/CartWidget/CartWidget';
import {BrowserRouter, Routes ,Route ,Link} from 'react-router-dom'
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Cart from './Components/Cart/Cart';





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
        <Route path= '/contactos' />
        <Route path= '/detail/:productId' element={<ItemDetail/>}/>
        
      </Routes>
       
      </BrowserRouter>
       
        
               

     




      </header>
    </div>

  );
}

export default App;
