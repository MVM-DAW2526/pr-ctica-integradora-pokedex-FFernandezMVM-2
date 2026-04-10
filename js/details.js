import { fetchPokemon } from './api.js';

async function details() {

    const params = new URLSearchParams(window.location.search);
    const idOrName = params.get('id');

    
    const pokemon = await fetchPokemon(idOrName);
    console.log(pokemon);

    const FotoPkmn = document.querySelector('.pkmn-id');
    const imagen = document.createElement('img');
        imagen.src = pokemon.sprites.front_default; // Esto hace que aparezcan los sprites en la foto
        FotoPkmn.appendChild(imagen);


        const PerfilPkmn = document.querySelector('.perfil-pkmn');
            const h3 = document.createElement('h3');
            const weight = document.createElement('h3');
            const height = document.createElement('h3');
            const type = document.createElement('h3');
             h3.textContent = pokemon.name;
            PerfilPkmn.appendChild(h3);
            height.textContent = "Altura: " + (pokemon.height / 10 + " M");
            PerfilPkmn.appendChild(height);
            weight.textContent = "Peso: " + (pokemon.weight / 10 + " Kg");
            PerfilPkmn.appendChild(weight);
            type.textContent = "Tipo: " + (pokemon.types[0].type.name);
            PerfilPkmn.appendChild(type);
            
            // Esto es pa las stats
            const stats = document.querySelector('.stats-pkmn');
            pokemon.stats.forEach(stat => {
                const row = document.createElement('div');
                row.classList.add('stat-row');
            
                const porcentaje = (stat.base_stat / 255) * 100;
                
                row.innerHTML = `
        
            <span class="stat-label">${stat.stat.name}</span>
        <div class="stat-bg">
            <div class="stat-fill" id="bar-${stat.stat.name}"></div>
        </div>
        <span class="stat-number">${stat.base_stat}</span>
    `;
    stats.appendChild(row);

    setTimeout(() => {
        const bar = document.getElementById(`bar-${stat.stat.name}`);
        if (bar) {
            bar.style.width = `${porcentaje}%`;
        }
    }, 100); 
});



const abltPkmn = document.querySelector('.ablt-pkmn');
        const ul = document.createElement('ul');
        pokemon.abilities.forEach(ability => {
            const li = document.createElement('li');
            li.textContent = ability.ability.name;
            ul.appendChild(li);
        });
        abltPkmn.appendChild(ul);

const movPkmn = document.querySelector('.mvnt-pkmn');
        pokemon.moves.forEach(move => {
            const columnas = document.createElement('div');
            columnas.textContent = move.move.name;
            movPkmn.appendChild(columnas);
        });
       

const evoPkmn = document.querySelector('.evo-pkmn');
        const ul3 = document.createElement('ul');
        const species = await fetchSpecies(pokemon.id);
        const evolutionChain = await fetchEvolutionChain(species.evolution_chain.url);
    
        let proximoPaso = evolutionChain.chain;
        while (proximoPaso) {
            const item = document.createElement('div');
            item.textContent = proximoPaso.species.name;
            ul3.appendChild(item);

            proximoPaso = proximoPaso.evolves_to[0];
        }
                evoPkmn.appendChild(ul3);
}
details();






