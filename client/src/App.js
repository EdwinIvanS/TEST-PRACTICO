import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Content from './components/content';
import Detalle from './components/detalle';

function App() {
  return (
      <BrowserRouter>                    
          <Routes>
            <Route path="/" exact={true} element={<Header/>} ></Route>
            <Route path="/items" exact={true} element={<Content/>} ></Route>
            <Route path="/items/:id" exact={true} element={<Detalle/>} ></Route>
          </Routes>
      </BrowserRouter>  
  );
}

export default App;
