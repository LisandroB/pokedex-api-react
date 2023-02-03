import './App.css';
import axios from "axios";
import React, {useEffect, useState} from "react"

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` 
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();   
  }

  return (
    <div className="App">
      <header className="App-header">
          
      </header>
    <div className="body">
      <form onSubmit={handleSubmit}> 
            <label>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true"/>
              <input type="text" onChange={handleChange} placeholder="Search for any Pokemon..."/>
            </label>
          </form>
          {pokemonData.map((data) => {
            return(
              <div className="container">
                  <img src={data.sprites["front_default"]}/>
                  <div className='Types'>
                    <h1>
                      Type
                    </h1> 
                    {pokemonType} 
                    <h1>
                      Weight
                    </h1> 
                    {data.weight} 
                    <h1>
                      Height 
                    </h1>
                    {data.height} 
                    <h1>
                      Number of Battles 
                    </h1>
                    {data.game_indices.length} 
                  </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
