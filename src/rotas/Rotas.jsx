import React, { useContext } from "react";
import {
    BrowserRouter, Routes, Route, Navigate
  } from 'react-router-dom';
import { useState } from "react";
import Componente1 from "../componentes/Componente1";
import Componente2 from "../componentes/Componente2";
import MyContext from "../contextos/MyContext.ts";

export default function Rotas(){
    const [auth,setAuth] = useState({valor: 1});

    return (
      <MyContext.Provider value={{auth,setAuth}}>
        <BrowserRouter>
          <Routes>
            
            <Route path="/" exact element={<h1>Página raiz</h1>} /> 
            <Route path="/c1" exact element={<Componente1/>} />  
            <Route path="/c2" exact element={<Componente2/>} />  
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
      </BrowserRouter>
    </MyContext.Provider>);
}