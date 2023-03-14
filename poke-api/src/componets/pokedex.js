import React from "react";

const Pokedex = (props) =>{
    const {pokemons, loading} = props;
    return(
        <div>
            <div className="pokedex-header">
            <h1>Pokedex</h1>
            <div>Paginação</div>
           </div>
             {loading ? (
           <div>Carregando, slow...</div>
             ): (
            <div className="pokedex-grid"> </div>
            )}
        </div>
         )
}

export default Pokedex;
