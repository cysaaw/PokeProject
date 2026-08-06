async function fetchAllPokemon() {
    const response = await fetch(`${BASE_URL}pokemon?limit=151`);
    const data = await response.json();

    const pokemonList = data.results;

    for (const pokemon of pokemonList) {
        const response = await fetch (pokemon.url);
        const details = await response.json();

        displayPokemonCard(details);
    }
}


fetchAllPokemon();