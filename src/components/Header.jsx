import React from 'react'
import {HashLink} from "react-router-hash-link"


function Header() {
  return (
    <nav>
    <h1> Planning Guru</h1>
          <main>

      <HashLink to={"/#home"}>Home</HashLink>
      <HashLink to={"/contact"}>Contact</HashLink>
      <HashLink to={"/#about"}>About</HashLink>
      <HashLink to={"/#events"}>Events</HashLink>
      <HashLink to={"/gallery"}>Gallery</HashLink>
          </main>   

    </nav>
  )
}

export default Header;
