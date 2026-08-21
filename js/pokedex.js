

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

    // If scroll cant be triggered, load more immediately
    if (document.documentElement.scrollHeight <= window.innerHeight) {
        await fetchPokemonBatch();
    }
}

window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1000
    ) {
        fetchPokemonBatch();
    }
}); 


const genSelector = document.querySelector(".gen-selector");
let currentGen = 1;


genSelector.addEventListener("change", (event) => {
    currentGen = Number(event.target.value);

    document.getElementById("pokedex").innerHTML = "";

    isLoading = false;

    fetchGeneration(currentGen);
    fetchPokemonBatch();
})

const pokedex = document.getElementById("pokedex");

pokedex.addEventListener("click", (event) => {

    const card = event.target.closest(".pokemon-card");

    if (!card) return;

    const pokemonName = card.dataset.name;

    window.location.href = `../index.html?pokemon=${pokemonName}`;

});




fetchGeneration(currentGen);
fetchPokemonBatch();