import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Loja from './Pages/Loja';
import Categorias from './Pages/Categorias'
import Produto from './Pages/Produto'
import Cart from './Pages/Cart'
import CadastroAcesso from './Pages/CadastroAcesso'
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Loja/>}/>
          <Route path='/masculino' element={<Categorias banner={men_banner} category="men"/>}/>
          <Route path='/feminina' element={<Categorias banner={women_banner} category="women"/>}/>
          <Route path='/criancas' element={<Categorias banner={kid_banner} category="kid"/>}/>
          <Route path="/product" element={<Produto/>}>
            <Route path=':productId' element={<Produto/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/acessar' element={<CadastroAcesso/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
