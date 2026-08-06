const BASE_URL = "https://pokeapi.co/api/v2/";

function displayPokemonCard(pokemon) {
    document.getElementById("pokedex").innerHTML += `
    <div class="pokemon-card">
        <h2>${pokemon.name}</h2>
        <h1>#${pokemon.id}</h2>
        <img src ="${pokemon.sprites.other["official-artwork"].front_default}">
    </div>
    `;
}

function renderPokemonSearchResult(pokemon) {
    const nameDisplay = document.getElementById("pokemon-name");

    nameDisplay.innerHTML = pokemon.name;
}

async function fetchPokemon() {
    const input = document.querySelector(".input-text");
    const name = input.value;

    const response = await fetch(`${BASE_URL}pokemon/${name}`);
    const data = await response.json();

    renderPokemonSearchResult(data);
}

document.querySelector(".search-button").addEventListener("click", fetchPokemon);

