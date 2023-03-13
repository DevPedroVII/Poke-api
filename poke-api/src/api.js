export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limite=${limit}&offset=${offset}`
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}
