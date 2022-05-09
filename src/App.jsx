import React, { useState, useEffect } from "react";

import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import "./App.css";



function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "80% 20%",
          gridColumnGap: "3rem",
        }}
      >
        <div>
          <PokemonFilter
            filter={filter}
            setFilter={setFilter}
          />

          <table width="100%">
            <tbody>
              {data
                .filter(({ name: { english } }) =>
                  english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase()) //includes es case sensitive
                )
                .slice(0, 14)
                .map((pokemon) => (
                  <PokemonRow
                    /* una alternativa: key={[pokemon.name.english, pokemon.base.hp]} */
                    key={pokemon.id}
                    pokemon={pokemon}
                    // Aquí creamos un custom event, es decir, cuando el evento "onDetail" ocurra en el componente PokemonRow, desatará el setSelectedPokemon(pokemon). Otra forma sería pasar el setter del estado selectedPokemon al componente.
                    onDetail={(pokemon) => setSelectedPokemon(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {/* solo si hay un selectedPokemon vamos a mostrar el componente */}
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>

  );
}

export default App;