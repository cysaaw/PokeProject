

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




fetchAllPokemon();