import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Persona = () => {
  const { store, actions } = useContext(Context);
  const [cargando, modificarCargando] = useState (true);
  
  useEffect (async () => {
    await actions.obtenerPersonas();
    modificarCargando(false);
}, []);

    if (cargando) {
        return <div className="loading">Loading...</div>
    }

    return <div className="text-center mt-4">
    <h1>Characters</h1>
      <div className="row flex-nowrap overflow-scroll">
      {store.personas.map((persona, i) => {
        return (
          <div key={i}>
              <div className="col mx-1">
                <div className="card custom-card" style={{ width: "18rem" }}>
                <img src="https://statics.viralizalo.com/virs/2016/01/VIR_87271_7538_que_personaje_de_la_saga_star_wars_eres_segun_tu_personalidad.jpg?cb=28996"></img>
                <div className="card-body">
                  <h5 className="card-title">{persona.name}</h5>
                  <Link className="btn btn-primary" to={`/persona/${persona.uid}`}>
                    More details
                  </Link>
                  <button className="heart-button" onClick={() => actions.agregarFavoritos(persona.name)} ><svg xmlns="http://www.w3.org/2000/svg" className="heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg></button>
                </div>
              </div>
            </div>
          </div>
        );
      })} ;
    </div>
    </div>
    

};

export default Persona;