import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListPokemon from "../components/ListPokemon";
import "../styles/Pokedex.css";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=16";
    axios
      .get(URL)
      .then((res) => setPokemons(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="main-container">
      <Header />
      <ListPokemon pokemons={pokemons} />
      <Footer />
    </main>
  );
};

export default Pokedex;
