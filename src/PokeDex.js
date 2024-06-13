import React from "react";
import { useAxios } from "./hooks";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios(BASE_URL);

  const handleAdd = async () => {
    const name = document.getElementById("pokemonName").value.toLowerCase();
    addPokemon(name);
  };
  
  return (
    <div className="PokeDex">
      <h3>Pokedex</h3>
      <div>
        <input type="text" placeholder="Enter a pokemon name" id="pokemonName" />
        <button onClick={handleAdd}>Add Pokemon</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(p => (
          <PokemonCard
            key={p.id}
            front={p.sprites.front_default}
            back={p.sprites.back_default}
            name={p.name}
            stats={p.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
