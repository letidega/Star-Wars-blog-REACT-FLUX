import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/cards.css";

const PersonaCard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    console.log(params, params.id);
    actions.obtenerDetallePersonas(params.id);
  }, []);

  const [cargando, modificarCargando] = useState(true);

  useEffect(async () => {
    await actions.obtenerPersonas();
    modificarCargando(false);
  }, []);

  if (cargando) {
    return <div className="loading">Loading...</div>;
  }

  document.body.style = "background: #2A2A2A;";

  console.log(store);

  return (
    <body>
      <div className="container mt-3 mw-100 border">
        <div className="container2 m-4 text-white ">
          {store.detallePersonas.properties && (
            <h2> {store.detallePersonas.properties.name} </h2>
          )}
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <img className="imagen img-fluid h-auto" src="https://statics.viralizalo.com/virs/2016/01/VIR_87271_7538_que_personaje_de_la_saga_star_wars_eres_segun_tu_personalidad.jpg?cb=28996"/>
            </div>
            <div className="col-12 col-md-7">
            <p  className="text-align: justify">Lucas ipsum dolor sit amet maul grievous mustafar wampa organa
              yavin organa fett antilles tatooine. Biggs amidala kenobi antilles
              moff yavin solo darth greedo. Wookiee wicket darth jinn c-3p0.
              Bespin jinn k-3po coruscant darth baba calamari ahsoka. Vader yoda
              kamino moff lobot r2-d2 organa skywalker baba. Gonk c-3po yavin
              moff moff skywalker. Jinn darth binks hutt coruscant dantooine
              moff binks. Moff darth darth dantooine tatooine moff skywalker.
              Skywalker calrissian organa moff. Mothma mace chewbacca maul
              skywalker anakin thrawn ahsoka antilles. Darth dooku twi'lek jade
              chewbacca chewbacca. Han skywalker mara tatooine fett skywalker
              solo hutt. Kashyyyk fisto alderaan dantooine coruscant watto jinn.
              Grievous tatooine lobot watto dantooine bespin. Vader darth leia
              mace moff mandalore sith solo dooku. Fett organa boba kenobi c-3p0
              solo fisto. Alderaan palpatine anakin kenobi twi'lek. Maul
              skywalker baba calrissian solo boba twi'lek. Darth antilles organa
              windu bespin. Zabrak calamari boba aayla darth solo grievous
              palpatine kessel. Owen hutt hoth kit antilles baba.
              <br></br>
              <br></br>
              If you want to know more about the Star Wars Universe, you can
              visit their website: https://www.starwars.com/</p>
            </div>
          </div>
        </div>
      </div>
      {store.detallePersonas.properties ? (
        <div className="propiedades row d-flex">
          <div className="col-12 col-md-2 text-danger">
            <strong>Name:</strong>
            <br />
            {store.detallePersonas.properties.name}
          </div>
          <div className="col-12 col-md-2 text-danger">
            <strong>Birth Year:</strong>
            <br />
            {store.detallePersonas.properties.birth_year}{" "}
          </div>
          <div className="col-12 col-md-2 text-danger">
            <strong>Gender:</strong>
            <br />
            {store.detallePersonas.properties.gender}{" "}
          </div>
          <div className="col-12 col-md-2 text-danger">
            <strong>Height:</strong>
            <br />
            {store.detallePersonas.properties.height}{" "}
          </div>
          <div className="col-12 col-md-2 text-danger">
            <strong>Skin Color:</strong>
            <br />
            {store.detallePersonas.properties.skin_color}{" "}
          </div>
          <div className="col-12 col-md-2 text-danger">
            <strong>Eye Color:</strong>
            <br />
            {store.detallePersonas.properties.eye_color}{" "}
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </body>
  );
};

export default PersonaCard;
