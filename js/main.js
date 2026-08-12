
// Display Pokemon info
function renderPokemon(pokemon) {
    

    displayPokemon();

    renderPokemonLeftSide(pokemon);
    renderPokemonMiddle(pokemon);
    renderPokemonRightSide(pokemon);
    
    

    
}

function displayPokemon() {
    const pokemonDisplay = document.getElementById("pokemon-display");
    pokemonDisplay.classList.add("active");
}

function renderPokemonLeftSide(pokemon) {

    const pokemonMiscDisplay = document.querySelector(".pokemon-information");
    const nameUpper = makeUpperCase(pokemon.name);

    pokemonMiscDisplay.innerHTML = `
        <h3>Information</h3>
        <p>#${pokemon.id}</p>
        <p>${nameUpper}</p>
        <h4>Type</h4>
        <p>${pokemon.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(", ")}</p>
        <h4>Height</h4>
        <p>${pokemon.height / 10} m</p>
        <h4>Weight</h4>
        <p>${pokemon.weight / 10 } kg</p>
        
        
    `;
}

function renderPokemonMiddle(pokemon) {
    const nameUpper = makeUpperCase(pokemon.name);
    const nameDisplay = document.getElementById("pokemon-name");
    const imageDisplay = document.getElementById("pokemon-image");
    const shinyimageDisplay = document.getElementById("pokemon-image-shiny");

    nameDisplay.textContent = nameUpper;
    imageDisplay.src = pokemon.sprites.other["official-artwork"].front_default;
    shinyimageDisplay.src = pokemon.sprites.other["official-artwork"].front_shiny;
}

function renderPokemonRightSide(pokemon) {
    const statsDisplay = document.querySelector(".pokemon-stats");

    statsDisplay.innerHTML = "<h3>Stats</h3>";

    pokemon.stats.forEach(stat => {

        const upperName = makeUpperCase(stat.stat.name);

        statsDisplay.innerHTML += `
            <p>${upperName}: ${stat.base_stat}</p>
        `;
    })
}

// Search
async function fetchPokemonBySearch() {
    const input = document.querySelector(".input-text");
    const name = input.value.trim();

    const pokemon = await fetchPokemon(name);

    renderPokemon(pokemon);
}

function makeUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

document.querySelector(".search-button").addEventListener("click", fetchPokemonBySearch);

