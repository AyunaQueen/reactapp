import React from "react";


export default function Dados(props){
  const n1=10
  const n2=5
    return(
       <section>
         <p>Canal:{props.canal()}</p>
         <p>Youtube:{props.youtube}</p>
         <p>Curso:{props.curso}</p>
         <p>{'O resultado da soma é :' + props.somar(n1,n2)}</p>
       </section>
    )
}