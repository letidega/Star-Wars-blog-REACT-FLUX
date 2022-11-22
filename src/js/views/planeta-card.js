import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/cards.css";

const PlanetaCard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.obtenerDetallePlanetas(params.id);
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

  return (
    <body>
      <div style={{ backgroundColor: "#2A2A2A" }}>
        <div className="container mt-3 mw-100 border">
          <div className="container2 m-4 text-white">
            {store.detallePlanetas.properties && (
              <h2> {store.detallePlanetas.properties.name} </h2>
            )}
            <div className="row align-items-center">
              <div className="col-12 col-md-5">
                <img className="img-fluid h-auto" src="https://statics.viralizalo.com/virs/2016/01/VIR_87271_7538_que_personaje_de_la_saga_star_wars_eres_segun_tu_personalidad.jpg?cb=28996"/>
              </div>
              <div className="col-12 col-md-7 text-justify">
              <p className="text-align: justify">Lucas ipsum dolor sit amet maul grievous mustafar wampa organa
                yavin organa fett antilles tatooine. Biggs amidala kenobi
                antilles moff yavin solo darth greedo. Wookiee wicket darth jinn
                c-3p0. Bespin jinn k-3po coruscant darth baba calamari ahsoka.
                Vader yoda kamino moff lobot r2-d2 organa skywalker baba. Gonk
                c-3po yavin moff moff skywalker. Jinn darth binks hutt coruscant
                dantooine moff binks. Moff darth darth dantooine tatooine moff
                skywalker. Skywalker calrissian organa moff. Mothma mace
                chewbacca maul skywalker anakin thrawn ahsoka antilles. Darth
                dooku twi'lek jade chewbacca chewbacca. Han skywalker mara
                tatooine fett skywalker solo hutt. Kashyyyk fisto alderaan
                dantooine coruscant watto jinn. Grievous tatooine lobot watto
                dantooine bespin. Vader darth leia mace moff mandalore sith solo
                dooku. Fett organa boba kenobi c-3p0 solo fisto. Alderaan
                palpatine anakin kenobi twi'lek. Maul skywalker baba calrissian
                solo boba twi'lek. Darth antilles organa windu bespin. Zabrak
                calamari boba aayla darth solo grievous palpatine kessel. Owen
                hutt hoth kit antilles baba.
                <br></br>
                <br></br>
                If you want to know more about the Star Wars Universe, you can
                visit their website: https://www.starwars.com/</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {store.detallePlanetas.properties ? (
            <div className="propiedades row d-flex">
              <div className="col-12 col-md-2 text-danger">
                <strong>Name:</strong>
                <br />
                {store.detallePlanetas.properties.name}{" "}
              </div>
              <div className="col-12 col-md-2 text-danger">
                <strong>Climate:</strong>
                <br />
                {store.detallePlanetas.properties.climate}{" "}
              </div>
              <div className="col-12 col-md-2 text-danger">
                <strong>Population:</strong>
                <br />
                {store.detallePlanetas.properties.population}{" "}
              </div>
              <div className="col-12 col-md-2 text-danger">
                <strong>Orbital Period:</strong>
                <br />
                {store.detallePlanetas.properties.orbital_period}
              </div>
              <div className="col-12 col-md-2 text-danger">
                <strong>Rotation Period:</strong>
                <br />
                {store.detallePlanetas.properties.rotation_period}
              </div>
              <div className="col-12 col-md-2 text-danger">
                <strong>Diameter:</strong>
                <br />
                {store.detallePlanetas.properties.diameter}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </body>
  );
};

export default PlanetaCard;
