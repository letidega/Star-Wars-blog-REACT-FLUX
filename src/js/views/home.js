import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Persona from "../component/Persona";
import Planeta from "../component/Planeta";
import Vehiculo from "../component/Vehiculo";


export const Home = () => {
  const { store, actions } = useContext(Context);

useEffect (() => {
actions.obtenerPlanetas()
actions.obtenerPersonas()
actions.obtenerVehiculos()
},[])


      return ( 
        <div className="tarjetas">
      <Navbar></Navbar>
      <Persona></Persona>
      <Planeta></Planeta>
      <Vehiculo></Vehiculo>
      </div>
      )};
