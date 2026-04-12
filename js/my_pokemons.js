import { fetchPokemon } from './api.js';

async function myPokemons() {

    const misPokemons = JSON.parse(localStorage.getItem("misPokemons")) || [];
    const pokemonGrid = document.getElementById('mainPkmGrid');

    misPokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const link = document.createElement('a');
        link.href = `details.html?id=${pokemon.id}`;
        link.classList.add('pkmn-details');
        
        const img = document.createElement('img');
            img.src = pokemon.sprites.front_default;
            img.alt = pokemon.name;

            const nameH3 = document.createElement('h3');
            nameH3.classList.add('pkm-name');
            nameH3.textContent = pokemon.name;

            link.appendChild(img);
            link.appendChild(nameH3);
            card.appendChild(link);

        pokemonGrid.appendChild(card);
        });
};

myPokemons();