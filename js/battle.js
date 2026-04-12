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

    const enemyMax = pokemonSalvaje.stats[0].base_stat;
    const playerMax = pokemonPlayer.stats[0].base_stat;
    
    const btnAttack = document.getElementById('btn-attack');
    const btnCatch = document.getElementById('btn-catch');
    const btnRun = document.getElementById('btn-run');
    const logs = document.getElementById('alert-msg');

    btnCatch.addEventListener('click', function() {
        const misPokemons = JSON.parse(localStorage.getItem("misPokemons")) || [];

        let captura = Math.random();
        if (enemylife < (pokemonSalvaje.stats[0].base_stat * 0.3)) {
            captura += 0.3;
        }
        if (captura > 0.5) {
            logs.textContent = '¡Has capturado al pokemon!';
        misPokemons.push(pokemonSalvaje);
        localStorage.setItem("misPokemons", JSON.stringify(misPokemons));
        setTimeout(() => { window.location.href = "my_pokemons.html"; } ,2000);
        
        } else {
            alert("No has capturado al pokemon. ¡Sigue luchando!");
        }
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
                        logs.textContent = '¡Tu pokemon está atacando!';
                

            setTimeout(function() {
            if (enemylife > 0) {
                playerlife -= enemyAttack;

            if (playerlife <= 0)  {
                playerlife = 0;
                logs.textContent = '¡Tu pokemon se ha debilitado!';
                setTimeout(() => { window.location.href = "hunt.html"; } ,2000);
            } else {
                logs.textContent = '¡El pokemon rival está atacando!';
            }
        const hpPlayerText =  document.getElementById('hp-player').textContent = playerlife;
            }    
        }, 1000);


    });


}
battle();
  