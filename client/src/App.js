import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import ContainerGeneral from './components/containerGeneral';
import Detalle from './components/detalle';
import NotFount from './components/not-fount';

function App() {
  return (
      <BrowserRouter>                    
          <Routes>
            <Route path="/" exact={true} element={<Header/>} ></Route>
            <Route path="/items" exact={true} element={<ContainerGeneral/>} ></Route>
            <Route path="/items/:id" exact={true} element={<Detalle/>} ></Route>
            <Route path="/items/notFount" exact={true} element={<NotFount/>} ></Route>
          </Routes>
      </BrowserRouter>  
  );
}

export default App;
