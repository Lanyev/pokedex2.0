import React from "react";
import Footer from "../components/Footer";
import FormHome from "../components/FormHome";
import "/src/styles/Home.css";

const Home = () => {
  return (
    <div>
      <main className="poke__home">
        <img className="poke__home-image" src="" alt="" />
        <h2 className="poke__title">Hi, Trainer!</h2>
        <p>Give me your name to start!</p>
        <FormHome />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
