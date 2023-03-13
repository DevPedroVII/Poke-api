import React,{useEffect, useState} from 'react';
import './App.css';
import NavBar from './componets/NavBar';
import  Pokedex  from './componets/pokedex';
import SearchBar from './componets/SearchBar';

function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () =>{
    try{
      setLoading(true)
      const data = await getPokemons();
    } catch(error){
      console.log ("fetchPokemons Error: ", error)
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  })

  return (
    <div>
      <NavBar />
      <SearchBar/>
      <Pokedex/>
    </div>
  );
}

export default App;
