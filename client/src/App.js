import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Detalle from './components/detalle';
import Section from './components/section';

function App() {
  return (
      <BrowserRouter>                    
          <Routes>
            <Route path="/" exact={true} element={<Header/>} ></Route>
            <Route path="/items/:id" exact={true} element={<Detalle/>} ></Route>
          </Routes>
      </BrowserRouter>  
  );
}

export default App;
