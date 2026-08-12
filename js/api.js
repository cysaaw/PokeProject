const BASE_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemon(name) {
    const response = await fetch(`${BASE_URL}pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Pokemon not found");
    }

    return await response.json();
    
}

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