import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="#" className="link logo" ><h1 className="logo">Logo</h1></a>
      <nav className="nav-link">
        <a href="#" className="link">Accueil</a>
        <a href="#"  className="link" >A propos</a>
        <a href="#"  className="link">Categorie</a>
        <a href="#"  className="link">S inscrire</a>
        <a href="#" className="important link">Connexion</a>
      </nav>
    </header>
  );
}

export default Header;
