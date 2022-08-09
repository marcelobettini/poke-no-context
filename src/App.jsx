import React, { useState, useEffect } from "react";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";



function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);


  //Fetch alternatives: probar bad request con puerto y nombre de archivo
  // function handleErrors(res) {
  //   if (!res.ok) throw Error(res.message)
  //   return res.json();
  // }

  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
    .then(res => res.json(), 
      (error) => setError(error)
    )
    .catch(error => setError(error))
    .then(data => setData(data))
      // .then(res => handleErrors(res))
      // .then(data => setData(data))
      // .catch(error => setError(error))
      .finally(()=> setLoading(false))
  }, [])
{if(loading) return <div>fetching...</div>}

{if(error) return <div>{error.message}</div>}
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          alignItems: 'center',
          gridTemplateColumns: "80% 20%",
          gap: "2rem",
        }}
      >
        <div>
          <PokemonFilter
            filter={filter}
            setFilter={setFilter}
          />

          <PokemonTable data={data} filter={filter} setSelectedPokemon={setSelectedPokemon} />
        </div>
        {/* solo si hay un selectedPokemon vamos a mostrar el componente */}
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>

  );
}

export default App;