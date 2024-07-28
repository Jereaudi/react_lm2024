import { BrowserRouter, Routes, Router } from 'react-router-dom';
import './App.css';
import Header from './componentes/header';
import Nav from './componentes/nav';
import Footer from './componentes/footer';

import Homepage from './paginas/homePage';
import Nosotrospage from './paginas/Nosotrospage';
import Serviciopage from './paginas/Serviciopage';
import contactopage from './paginas/contactopage';

function App() {  
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Router path='/' element={<Homepage/>} />
          <Router path='/nosotros' element={<Nosotrospage/>} />
          <Router path='/servicios' element={<Serviciopage/>} />
          <Router path='/contactos' element={<contactopage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
