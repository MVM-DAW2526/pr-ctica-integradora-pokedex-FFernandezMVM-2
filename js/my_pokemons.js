import { fetchPokemon } from './api.js';

async function myPokemons() {
    const misPokemons = JSON.parse(localStorage.getItem("misPokemons")) || [];
    const pokemonGrid = document.getElementById('mainPkmGrid');

    misPokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        card.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;

        pokemonGrid.appendChild(card);
        });
};

myPokemons();