import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Detalle from './components/detalle';
import Header from './components/header'

function App() {
  return (
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/items/:id' exact={true} component = {<Detalle/>} />
          </Routes>
      </BrowserRouter>  
  );
}

export default App;
