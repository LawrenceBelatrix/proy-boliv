import logo from './logo.svg';
import './App.css';
import { Componente1 } from './components/Componente1';
import { Componente2 } from './components/Componente2';
import { Componente3 } from './components/Componente3';
import { Componente4 } from './components/Componente4';
import { Componente5 } from './components/Componente5';
import { Componente6 } from './components/Componente6';
import 'bootstrap/dist/css/bootstrap.min.css'
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Componete2 = lazy(() => import("./components/Componente2"));

function App() {
  return (
    <Router>
      <Componente1/>
      <Componente2/>
      <Componente3/>
      <Componente4/> 
      <Componente5/>
      <Componente6/>
      
    <Routes>
      <Route path="/" element={<Componente2 />} />
      <Route path="/componente2" element={<Componente2 />} />
      

    </Routes>
    </Router>
    




    

  
    
  );
}

export default App;
