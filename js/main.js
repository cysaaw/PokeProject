const BASE_URL = "https://pokeapi.co/api/v2/";

function displayPokemonCard(pokemon) {
    document.getElementById("pokedex").innerHTML += `
    <div class="pokemon-card">
        <h1>#${pokemon.id}</h2>
        <img src ="${pokemon.sprites.other["official-artwork"].front_default}">
        <h2>${pokemon.name}</h2>
        
        
    </div>
    `;
}

function renderPokemonSearchResult(pokemon) {
    const nameUpper = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const pokemonDisplay = document.getElementById("pokemon-display");
    pokemonDisplay.classList.add("active");

    // Left stuff
    const pokemonMiscDisplay = document.querySelector(".pokemon-information");

    pokemonMiscDisplay.innerHTML = `
        <h3>Information</h3>
        <p>#${pokemon.id}</p>
        <p>${nameUpper}</p>
        <h4>Type</h4>
        <p>${pokemon.types.map(type => type.type.name).join(", ")}</p>
        <h4>Height</h4>
        <p>${pokemon.height / 10} m</p>
        <h4>Weight</h4>
        <p>${pokemon.weight / 10 } kg</p>
        
        
    `;

    // Middle search stuff
    const nameDisplay = document.getElementById("pokemon-name");
    const imageDisplay = document.getElementById("pokemon-image");
    const shinyimageDisplay = document.getElementById("pokemon-image-shiny");

    nameDisplay.textContent = nameUpper;
    imageDisplay.src = pokemon.sprites.other["official-artwork"].front_default;
    shinyimageDisplay.src = pokemon.sprites.other["official-artwork"].front_shiny;

    // Right stuff
    const statsDisplay = document.querySelector(".pokemon-stats");

    statsDisplay.innerHTML = "<h3>Stats</h3>";

    pokemon.stats.forEach(stat => {
        statsDisplay.innerHTML += `
            <p>${stat.stat.name}: ${stat.base_stat}
        `;
    })
    

    
}

async function fetchPokemon() {
    const input = document.querySelector(".input-text");
    const name = input.value;

    const response = await fetch(`${BASE_URL}pokemon/${name}`);
    const data = await response.json();

    renderPokemonSearchResult(data);
}

document.querySelector(".search-button").addEventListener("click", fetchPokemon);

