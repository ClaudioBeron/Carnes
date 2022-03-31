import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/listaDeitems/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        
        
       
        
    <ItemListContainer greeting={`Lista de precios`}/>          
        


      </header>
    </div>

  );
}

export default App;
