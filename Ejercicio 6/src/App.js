import "./styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getImage } from "./redux/actions";

export default function App() {
  const [input, setInput] = useState({
    name: ""
  });
  let stats = [];

  let pokemon = useSelector((state) => state.pokemon);
  let images = useSelector((state) => state.image);

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    const name = e.target.value;
    setInput(name);
  };

  function handleSubmit() {
    if (isNaN(input) === true) {
      input.toLowerCase();
    }
    dispatch(getPokemon(input));
    dispatch(getImage(input));
  }

  if (pokemon.types) {
    for (let i = 0; i < pokemon.types.length; i++) {
      if (pokemon.types.length > 1) {
        stats.push(pokemon.types[i].type.name + " ");
      } else {
        stats.push(pokemon.types[i].type.name);
      }
    }
  }

  return (
    <div className="App">
      <label htmlFor="name">Name: </label>
      <input onChange={onChangeInput} className="input" />
      <button onClick={handleSubmit}>Submit</button>
      <div className="form">
        <label className="espacio">Name: {pokemon.name} </label>
        <label className="espacio">ID: {pokemon.id} </label>
        <label className="espacio">Type: {stats} </label>
        <label className="espacio">Weight: {pokemon.weight} </label>
        <label className="espacio">Height: {pokemon.height} </label>
        <label>
          {images.sprites ? (
            <img src={images.sprites.front_default} />
          ) : (
            <label></label>
          )}{" "}
        </label>
      </div>
    </div>
  );
}

// Nombre, número, tipo, peso, altura y una imágen.
