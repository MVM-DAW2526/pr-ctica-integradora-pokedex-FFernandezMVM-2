import { fetchPokemonList } from './api.js';

const pokemonGrid = document.getElementById('mainPkmGrid');

async function renderPokemons() {
    const pokemons = await fetchPokemonList();

    pokemons.forEach((pokemon, index) => {
        const pokemonId = index + 1;
        
        const card = document.createElement('div');
        card.classList.add('pokemon-card'); 

        card.innerHTML = `
        <a href='details.html?id=${pokemonId}' class="pkmn-details">
            <div class="pokemon-image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt="pokemon">
            </div>
            <div class="pokemon-info">
                <span class="pkm-id">${pokemonId}</span>
                <h3 class="pkm-name">${pokemon.name}</h3>
            </div>
        </a>
        `;

        pokemonGrid.appendChild(card);
    });

    const busqueda = document.getElementById('pkmSearchInput');

    busqueda.addEventListener('input', () => {
        const texto = busqueda.value.toLowerCase();
        const cards = document.querySelectorAll('.pokemon-card'); 

    cards.forEach(card => {
        const pokemonNombre = card.querySelector('.pkm-name').textContent.toLowerCase();
        const pokemonNumero = card.querySelector('.pkm-id').textContent.toLowerCase();

        if (pokemonNombre.includes(texto) || pokemonNumero.includes(texto)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    });
}
renderPokemons();



    