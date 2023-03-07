export const searchPokemon = (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = fetch (url)
    } catch (error) {
        console.log("error: ", error)
    }
}
