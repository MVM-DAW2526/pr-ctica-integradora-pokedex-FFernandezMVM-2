import { fetchPokemonList } from './api.js';

const pokemonGrid = document.getElementById('mainPkmGrid');

async function renderPokemons() {
    const pokemons = await fetchPokemonList();

    pokemons.forEach((pokemon, index) => {
        const pokemonId = index + 1;
        
        const card = document.createElement('div');
        card.classList.add('pkmn-card'); 

        card.innerHTML = `
            <div class="pokemon-image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt="pokemon">
            </div>
            <div class="pokemon-info">
                <span class="pkm-id">0${pokemonId}</span>
                <h3 class="pkm-name">${pokemon.name}</h3>
            </div>
        `;

        pokemonGrid.appendChild(card);
    });
}

renderPokemons();