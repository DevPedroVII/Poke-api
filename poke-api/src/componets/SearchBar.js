import React, { useState } from "react";
import { searchPokemon } from "../api";


const SearchBar = () => {
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onbuttonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className = "searchbar-container">
            <div className = "searchbar" >
               <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div >
            <div className="searchbar-bnt">
              <button onClick={onbuttonClickHandler}>Buscar </button>
            </div>
         {!pokemon ? (
            <div>
            <div> Nome: {pokemon.name} </div>
            <div> Peso: {pokemon.weight} </div>
            <img src ={pokemon.sprites.front_default} alt ={pokemon.name}/>
            </div>
         ) : null}
         </div >
    )
}
export default SearchBar;
