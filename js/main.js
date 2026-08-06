const BASE_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemon(name) {
    const response = await fetch(`${BASE_URL}pokemon/${name}`);
    const pokemon = await response.json();

    document.getElementById("pokemon-container").innerHTML = `
        <h2>${pokemon.name}</h2>
        <h1>${pokemon.order}</h2>
        <img class="pokemon-normal-sprite" src ="${pokemon.sprites.other["official-artwork"].front_default}">
    `;
}

fetchPokemon("rayquaza");