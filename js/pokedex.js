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

function displayPokemonCard(pokemon) {
    const upperName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById("pokedex").innerHTML += `
    <div class="pokemon-card" data-name="${pokemon.name}">
        <h1>#${pokemon.id}</h2>
        <img src ="${pokemon.sprites.other["official-artwork"].front_default}">
        <h3>${upperName}</h3>
        
        
    </div>
    `;
}

/*document.getElementById("pokedex").addEventListener("click", (event) => {
    const card = event.target.closest("pokemon-card");

    if (!card) return;

    const pokemonName = card.dataset.name;

    fetchPokemonByName(pokemonName);
})

async function fetchPokemonByName(name) {
    const reponse = await fetch(`${BASE_URL}pokemon/${name}`);
    const pokemon = await response.json();

    renderPokemonSearchResult(pokemon);
}*/


fetchAllPokemon();