import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { handleDelete } from "react";
import "../../styles/navbar.css";
import logo from "../../img/logo.png";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const eliminarFavorito = (nombre) => actions.eliminarFavoritos(nombre);

  return (
    <nav className="navbar mb-3 navbar-expand-md ">
      <div className = "col-6 d-flex justify-content-sm-center m-auto">
        <img className = "logo img-fluid mx-auto" src={logo}/>
      </div>
      <div className="dropdown">
        <a className="btn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
		Favorites
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {store.favoritos.length > 0 ? (
                store.favoritos.map((favorito, i) => (
                  <li key={i}>
                    {favorito} <a href="#" onClick={ () => eliminarFavorito(favorito) }><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="18" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg></a>
                  </li>
                ))
              ) : (<li>Empty</li>)}
        </ul>
      </div>
		  </nav>
   );
};
