import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Detalle from './components/detalle';

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/items/:id" exact={true} element={<Detalle/>} ></Route>
          </Routes>
      </BrowserRouter>  
  );
}

export default App;
