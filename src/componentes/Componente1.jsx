import React, { useContext } from "react";
import MyContext from "../contextos/MyContext.ts";
import { useEffect } from "react";

export default function Componente1(){
    const {auth, setAuth} = useContext(MyContext);

    useEffect(()=>{
        console.log("valor: " + JSON.stringify(auth));
    });

    return (
        <h1> teste </h1>)
}