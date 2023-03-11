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
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-bnt">
                <button onClick={onbuttonClickHandler}>Buscar </button>
            </div>
        </div>
    )
}
export default SearchBar;
