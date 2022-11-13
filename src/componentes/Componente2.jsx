import React, { useEffect } from "react";
import MyContext from "../contextos/MyContext.ts";
import { useContext } from "react";

export default function Componente2(){
    const {auth, setAuth} = useContext(MyContext);

    useEffect(()=>{
        console.log("valor: " + JSON.stringify(auth));
    });

    return (<>
        <h1> {/*auth.valor==1 ? "autenticado" : "não autenticado"*/} </h1>
        <button onClick={() => {setAuth({valor: auth.valor+1})}}>alterar</button>
            </>
    )
}