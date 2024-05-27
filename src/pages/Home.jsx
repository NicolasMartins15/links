import React from 'react'
import { HomeContainer, LinksContainer } from './Home.styles'
import Nicolas from "../assets/Nicolas2.jpg"

export default function Home() {
  return (
<HomeContainer>
    <img src={Nicolas} alt="" />
    <h1>Nicolas Domingues Martins</h1>
    <h2>Itapeceria da Serra, São Paulo</h2>
    <p>"Garoto de Programa"</p>

<LinksContainer>
    <a href="https://github.com/NicolasMartins15"> GitHub</a>
    <a href="https://www.instagram.com/nico_ndm1/">Instagram</a>
    <a href="https://www.linkedin.com/in/nicolas-martins-401303214/">Linkedin</a>
</LinksContainer>

</HomeContainer>
  )
}
