import "./styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, getTypesID, getPokemon } from "./redux/actions";

export default function App() {
  let types = useSelector((state) => state.types);
  let cantidad = useSelector((state) => state.typeDetail);
  let pokemon = useSelector((state) => state.pokemon);
  let stats = [];
  let pokemonType = [];
  let compare = [];

  const [input, setInput] = useState({
    name: ""
  });

  console.log(compare);

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
  }
  function handleSelect(e) {
    dispatch(getTypesID(e.target.value));
  }
  function handleSelectCompare(e) {
    pokemonType = [];
    compare = [];
    const valor = e.target.value;
    let valido = "";
    for (let i = 0; i < pokemon.types.length; i++) {
      pokemonType.push(pokemon.types[i].type.name);
      if (pokemon.types[i].type.name === valor) {
        valido = "True";
      } else {
        valido = "False";
      }
      compare.push(e.target.value);
    }
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  if (pokemon.stats) {
    for (let i = 0; i < pokemon.stats.length; i++) {
      stats.push(pokemon.stats[i].base_stat);
    }
  }

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <label htmlFor="name">Types: </label>
      <select onChange={(e) => handleSelect(e)}>
        {types &&
          types.map((t) => (
            <option value={t.url} key={t.url}>
              {t.name}
            </option>
          ))}
      </select>
      {cantidad && (
        <div key={cantidad}>
          <label htmlFor="name">Quantity: </label>
          {cantidad.length}
        </div>
      )}
      <div>
        <label htmlFor="name">Name: </label>
        <input onChange={onChangeInput} />
        <button onClick={handleSubmit}>Submit</button>
        {isNaN(input) === false ? (
          <div>
            <label>HP: {stats[0]} </label>
            <label>Attack: {stats[1]} </label>
            <label>Defense: {stats[2]} </label>
            <label>Special attack: {stats[3]} </label>
            <label>Special defense: {stats[4]} </label>
            <label>Speed: {stats[5]} </label>
          </div>
        ) : (
          <div>
            {pokemon && (
              <div key={pokemon.id}>
                <label htmlFor="name">Pokemon: </label>
                N° {pokemon.id}
              </div>
            )}
          </div>
        )}
        <label htmlFor="name">Type compare: </label>
        <select onChange={(e) => handleSelectCompare(e)}>
          {types &&
            types.map((t) => (
              <option value={t.name} key={t.name}>
                {t.name}
              </option>
            ))}
        </select>
        <div>
          <label>Compare: {compare}</label>
        </div>
      </div>
    </div>
  );
}
