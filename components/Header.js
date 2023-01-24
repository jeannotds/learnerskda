import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="#"><h1 className="logo">Logo</h1></a>
      <nav className="nav-link">
        <a href="#">Accueil</a>
        <a href="#">A propos</a>
        <a href="#">Categorie</a>
        <a href="#">S inscrire</a>
        <a href="#" className="important">Connexion</a>
      </nav>
    </header>
  );
}

export default Header;
