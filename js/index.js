import { fetchPokemonList } from './api.js';

const pokemonGrid = document.getElementById('mainPkmGrid');

async function renderPokemons() {
    try {
        
        const pokemons = await fetchPokemonList();

        
        pokemons.forEach((pokemon, index) => {
            const pokemonId = index + 1;
            
            
            const card = document.createElement('div');
            card.classList.add('pokemon-card'); 

            const link = document.createElement('a');
            link.href = `details.html?id=${pokemonId}`;
            link.classList.add('pkmn-details');

            const img = document.createElement('img');
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            img.alt = pokemon.name;

            const nameH3 = document.createElement('h3');
            nameH3.classList.add('pkm-name');
            nameH3.textContent = pokemon.name;

            const spanId = document.createElement('span');
            spanId.classList.add('pkm-id');
            spanId.textContent = `#${pokemonId}`;

            
            link.appendChild(img);
            link.appendChild(spanId);
            link.appendChild(nameH3);
            card.appendChild(link);

            
            pokemonGrid.appendChild(card);
        });

    } catch (error) {
        
        console.error("Error cargando Pokémon:", error);
        pokemonGrid.textContent = "No se han podido cargar los Pokémon.";
    }
}


const busqueda = document.getElementById('pkmSearchInput');

busqueda.addEventListener('input', () => {
    const texto = busqueda.value.toLowerCase();
    const cards = Array.from(document.querySelectorAll('.pokemon-card')); 

    
    cards.filter(card => {
        const nombre = card.querySelector('.pkm-name').textContent.toLowerCase();
        const numero = card.querySelector('.pkm-id').textContent.toLowerCase();
        
        const coincide = nombre.includes(texto) || numero.includes(texto);
        card.style.display = coincide ? '' : 'none';
        
        return coincide;
    });
});

renderPokemons();