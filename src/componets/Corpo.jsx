import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    const cnl = () => {
        return 'CFB Curso'
    }
    const yt='youtube.com/cdbcursos' 
    const crs='react.js'
const somar=(v1,v2)=>{
    return v1+v2
}

    return (
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva no nosso canal</p>
            <p>Ative o sininho e clique no joinha</p>
            <Dados
                canal={cnl}
                youtube={yt}
                curso={crs}
                somar={somar}
                />
        
        </section >
    )
}