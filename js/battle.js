import { fetchPokemon } from './api.js';
   

async function battle() {

    const  pokemonSalvaje = JSON.parse(sessionStorage.getItem("pokemonSalvaje"));

    const pokemonPlayer = await fetchPokemon(25)

    const fotopkmn = document.getElementById('pkmnSalvaje');
    fotopkmn.setAttribute("src", pokemonSalvaje.sprites.front_default);

    const enemyName = document.getElementById('enemy-name');
    enemyName.textContent = pokemonSalvaje.name;
    
    const pkmnPlayer = document.getElementById('pkmn-player');
    pkmnPlayer.setAttribute("src", pokemonPlayer.sprites.back_default);

    const playerName = document.getElementById('player-name');
    playerName.textContent = pokemonPlayer.name;
    
    const btnAttack = document.getElementById('btn-attack');
    const btnCatch = document.getElementById('btn-catch');
    const btnRun = document.getElementById('btn-run');

    btnCatch.addEventListener('click', function() {
        const misPokemons = JSON.parse(localStorage.getItem("misPokemons")) || [];
        misPokemons.push(pokemonSalvaje);
        localStorage.setItem("misPokemons", JSON.stringify(misPokemons));
        window.location.href = "my_pokemons.html";
    });

    btnRun.addEventListener('click', function() {
        window.location.href = "hunt.html";
    });

    let enemylife = pokemonSalvaje.stats[0].base_stat;
    let playerlife = pokemonPlayer.stats[0].base_stat;

    const enemyAttack = pokemonSalvaje.stats[1].base_stat;
    const playerAttack = pokemonPlayer.stats[1].base_stat;


    btnAttack.addEventListener('click', function() {
            enemylife -= playerAttack;
            if (enemylife <= 0) enemylife = 0;
        const hpEnemyText = document.getElementById('hp-enemy').textContent = enemylife;
            console.log("Ataque del pokemon tuyo");

            setTimeout(function() {
            if (enemylife > 0) {
                playerlife -= enemyAttack;
            if (playerlife <= 0) playerlife = 0;
        const hpPlayerText =  document.getElementById('hp-player').textContent = playerlife;
            console.log("Ataque del pokemon enemigo");
            }    
        }, 1000);


    });

}
battle();
//            const stats = document.querySelector('.stats-pkmn');
           // pokemon.stats.forEach(stat => {
             //   const row = document.createElement('div');
               // row.classList.add('stat-row');
            
                //const porcentaje = (stat.base_stat / 255) * 100;

  