

function displayPokemonCard(pokemon) {

    const id = pokemon.url.split("/").filter(Boolean).pop();

    const upperName = makeUpperCase(pokemon.name);

    document.getElementById("pokedex").innerHTML += `
    <div class="pokemon-card" data-name="${pokemon.name}">
        <h1>#${id}</h1>
        <img loading="lazy" src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
        <h3>${upperName}</h3>
        
    </div>
    `;
}

// Variables to load Batches
let isLoading = false;
const batchSize = 30;

async function fetchPokemonBatch() {
    if (isLoading || offset >= end) return;

    // Prevent double Load
    isLoading = true;

    // Prevents trying to load more than there is left
    let amount = Math.min(batchSize, end - offset)

    const response = await fetch(
        `${BASE_URL}pokemon?offset=${offset}&limit=${amount}`
    );

    const data = await response.json();

    data.results.forEach(pokemon => {
        displayPokemonCard(pokemon);
    });

    offset += amount;
    isLoading = false;
}

window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500
    ) {
        fetchPokemonBatch();
    }
}); 




fetchGeneration(1);
fetchPokemonBatch();