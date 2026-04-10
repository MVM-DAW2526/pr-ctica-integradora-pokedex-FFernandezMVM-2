import { fetchPokemon } from './api.js';

    const pkmnSalvaje = document.getElementById('pkmn-salvaje');
    const pkmnRandom = document.querySelector('.pkmn-salvaje');
    const btnReveal = document.getElementById('btn-reveal');
    const batallaPkmn = document.getElementById('batalla-pkmn');
    const btnNewZone = document.getElementById('new-zone');
    const mapa = document.querySelector('.map');
let pokemonSalvaje = null;


async function pokemonRandom() {
    const pkmnRandom = Math.floor(Math.random() * 151) +1;
    pokemonSalvaje = await fetchPokemon(pkmnRandom);
    console.log(pokemonSalvaje);

    const fotopkmn = document.querySelector('.pkmn-oculto');
    fotopkmn.setAttribute("src", pokemonSalvaje.sprites.front_default);
    
    mapa.addEventListener('click', function() {
    if (btnReveal.style.display !== 'none') {
        btnReveal.click(); 
    }
});
    
    btnReveal.addEventListener('click', function() {
            fotopkmn.classList.remove('pkmn-oculto');
            fotopkmn.classList.add('reveal');
    document.querySelector('.pkmn-salvaje').textContent = "Ha aparecido: " + pokemonSalvaje.name;
    batallaPkmn.style.display = 'block';
    btnNewZone.style.display = 'block';
    btnReveal.style.display = 'none';

        
    })

    pkmnSalvaje.addEventListener('click', function() {
        btnReveal.click();
    });


    batallaPkmn.addEventListener('click', function() {
        sessionStorage.setItem("pokemonSalvaje", JSON.stringify(pokemonSalvaje));
        window.location.href = "battle.html";
    });

    btnNewZone.addEventListener('click', function() {
        window.location.href = "hunt.html";
    });

}
pokemonRandom();
