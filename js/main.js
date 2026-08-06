const BASE_URL = "https://pokeapi.co/api/v2/";

function displayPokemon(pokemon) {
    document.getElementById("pokedex").innerHTML += `
    <div class="pokemon-card">
        <h2>${pokemon.name}</h2>
        <h1>#${pokemon.id}</h2>
        <img src ="${pokemon.sprites.other["official-artwork"].front_default}">
    </div>
    `;
}

