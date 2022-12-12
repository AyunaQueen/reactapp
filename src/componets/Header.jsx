import React from "react";
import Avatar from "./imagem/avatar.png";

export default function Header(){
    return(
        <header>
          <img src={Avatar} alt="Meu avatar" />
          <h1>Olá eu sou a Richelle</h1>
        </header>
    )
}