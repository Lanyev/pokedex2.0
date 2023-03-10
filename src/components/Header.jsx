import React from "react";
import { useSelector } from "react-redux";
import "../styles/Header.css";

const Header = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  const handleClickLogout = () => {
    localStorage.removeItem("nameTrainer");
  };

  return (
    <header className="header">
      <h1 className="title">
        <span className="title-text">Pokedex</span>
      </h1>
      <p className="welcome-message">
        Welcome <span className="trainer-name">{nameTrainer}</span>, here you
        can see all the pokemons you can catch!
      </p>
      <div className="logout__container">
        <button onClick={handleClickLogout} className="logout__btn">
          <a href="/">Logout</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
