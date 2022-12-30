import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const [dataPokemon, setDataPokemon] = useState();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setDataPokemon(res.data))
      .catch((error) => console.log(error));
  }, []);

  const types = dataPokemon?.types.map((type) => type.type.name).join(" / ");

  return (
    <article
      className={`pokemon-card border-${dataPokemon?.types[0].type.name}`}
    >
      <section className="pokemon-card__image-section">
        <img
          src={dataPokemon?.sprites.other["official-artwork"].front_default}
          alt=""
          // className="pokemon-card__image"
          className={`pokemon-card__image bg-lg-${dataPokemon?.types[0].type.name}`}
        />
      </section>
      <section className="pokemon-card__info-section">
        <h3 className="pokemon-card__name">
          {dataPokemon?.name} #{dataPokemon?.id}
        </h3>
        <p className="pokemon-card__description">Types:</p>
        <p className="pokemon-card__type">{types}</p>
        <hr />
        <section className="pokemon-card__stats-section">
          <div className="pokemon-card__stats-container">
            <p className="pokemon-card__stat">
              <span className="pokemon-card__stat-name">HP:</span>
              {dataPokemon?.stats[0].base_stat}
              <span className="pokemon-card__stat-name">Height:</span>

              <span className="pokemon-card__stat-value">
                {dataPokemon?.height * 10} cm
              </span>
            </p>
            <section className="pokemon-card__stat">
              {dataPokemon?.stats.map((stat) => (
                <div className="pokeCard__stat">
                  <p className="pokeCard__stat-name">
                    {stat.stat.name.toUpperCase()}
                  </p>
                  <p className="pokeCard__stat-value">{stat.base_stat}</p>
                </div>
              ))}
            </section>
          </div>
        </section>
      </section>
    </article>
  );
};

export default PokemonCard;