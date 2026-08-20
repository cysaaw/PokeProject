const BASE_URL = "https://pokeapi.co/api/v2/";

async function fetchPokemon(name) {
    const response = await fetch(`${BASE_URL}pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Pokemon not found");
    }

    return await response.json();
    
}


// Loads only the name and URL for every Pokemon
async function fetchAllPokemon() {
    const response = await fetch(`${BASE_URL}pokemon?end=1025`);
    const data = await response.json();

    const pokemonList = data.results;

    pokemonList.forEach(pokemon => {
        displayPokemonCard(pokemon);
    });
}

// global Variables for Dex
// offset: current pos / end: where gen ends

let offset = 0;
let end = 0;

async function fetchGeneration(gen) {

    

    switch(gen) {
        case 1:
            offset = 0;
            end = 151;
            break;

        case 2:
            offset = 151;
            end = 251;
            break;

        case 3:
            offset = 251;
            end = 386;
            break;

        case 4:
            offset = 386;
            end = 493;
            break;

        case 5:
            offset = 493;
            end = 649;
            break;

        case 6:
            offset = 649;
            end = 721;
            break;

        case 7:
            offset = 721;
            end = 809;
            break;

        case 8:
            offset = 809;
            end = 905;
            break;

        case 9:
            offset = 905;
            end = 1025;
            break;

        default:
            throw new Error("generation not found");
    }

    /*const response = await fetch(
        `${BASE_URL}pokemon?offset=${offset}&end=${end}`
    );

    const data = await response.json();

    data.results.forEach(pokemon => {
        displayPokemonCard(pokemon);
    });*/
}