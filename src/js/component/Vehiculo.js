import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import VehiculoCard from "../views/vehiculo-card"

const Vehiculo = () => {
    const { store, actions } = useContext(Context);
    const [cargando, modificarCargando] = useState (true);

useEffect (async () => {
    await actions.obtenerVehiculos()
    modificarCargando(false);
}, []);

    if (cargando) {
        return <div>Loading...</div>
    }

    return <div className="text-center mt-4">
    <h1>Vehicles</h1>
      <div className="row flex-nowrap overflow-scroll">
      {store.vehiculos.map((vehiculo, i) => {
        return (
          <div key={i}>
              <div className="col mx-1">
                <div className="card custom-card" style={{ width: "18rem" }}>
                <img src="https://i.pinimg.com/originals/44/0a/f5/440af5d1d461816e7a1e2601ee28b223.jpg"></img>
                <div className="card-body">
                  <h5 className="card-title">{vehiculo.name}</h5>
                  <Link className="btn btn-primary" to={`/vehiculo/${vehiculo.uid}`}>
                  More details
                  </Link>
                  <button className="heart-button" onClick={() => actions.agregarFavoritos(vehiculo.name)}><svg xmlns="http://www.w3.org/2000/svg" className="heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg></button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ;
      </div>
      </div>
};

export default Vehiculo;