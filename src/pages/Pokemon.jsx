import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Pokemon.css";

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(URL)
      .then((res) => setDataPokemon(res.data))
      .catch((error) => console.log(error));
  }, []);

  // Function to handle clicking the "Back to Pokedex" button
  const handleBackToPokedex = () => {
    navigate("/pokedex");
  };

  return (
    <main className="pokemon">
      <section className="pokemonId">
        <section
          className={`pokemonId__header bg-lg-${dataPokemon?.types[0].type.name}`}
        ></section>
        <img
          className="pokemonId__img"
          src={
            dataPokemon?.sprites.other["official-artwork"].front_default || ""
          }
          alt=""
        />
        <h3 className="pokemonId__id"># {dataPokemon?.id}</h3>
        <h2 className="pokemonId__name">{dataPokemon?.name}</h2>
        <section className="pokemonId__features">
          <div className="pokemonId__feature">
            <p className="pokemonId__feature-name">Weight: </p>
            <p className="pokemonId__feature-value">{dataPokemon?.weight}</p>
          </div>
          <div className="pokemonId__feature">
            <p className="pokemonId__feature-name">Height:</p>
            <p className="pokemonId__feature-value">{dataPokemon?.height}</p>
          </div>
        </section>
        <section className="pokemonId__info">
          <div className="pokemonId__types">
            <h4 className="pokemonId__type-title">Type</h4>
            <div className="pokemonId__type-container">
              {dataPokemon?.types.map((type) => (
                <p
                  className={`pokemonId__type-value bg-${type.type.name}`}
                  key={type.type.name}
                >
                  {type.type.name}
                </p>
              ))}
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="pokemonId__info-skills">
            <h4 className="pokemonId__skill-title">Skills</h4>
            <div className="pokemonId__skill-container">
              {dataPokemon?.abilities.map((ability) => (
                <p className="pokemonId__skill-value" key={ability.ability.url}>
                  {ability.ability.name}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="pokemonId__stats">
          <h3 className="pokemonId__stats-title">Stats</h3>
          <div className="pokemonId__stats-container">
            {dataPokemon?.stats.map((stat) => (
              <div className="pokemonId__stat" key={stat.stat.name}>
                <div className="pokemonId_stat-header">
                  <p className="pokemonId__stat-name">{stat.stat.name}</p>
                  <p className="pokemonId__stat-value">{stat.base_stat}/150</p>
                </div>
                <div className="pokemonId__stat-bar">
                  <div
                    className="pokemonId__stat-barProgress"
                    style={{ width: `${stat.base_stat / 1.5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="pokemon__nav-buttons">
            <button
              className="pokemon__nav-button"
              onClick={handleBackToPokedex}
            >
              Back to Pokedex
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Pokemon;
