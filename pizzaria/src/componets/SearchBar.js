import React from "react";

const SearchBar = () => {
    let search = "charizard";
    const onChangeHandler = (e) => {
        console.log("pokemon: ",e.target.value)
        search = e.target.value
    }
    return(
        <div className="searchbar-container">
            <div className="searchbar">
              <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
        </div>
    )
}
export default SearchBar;
